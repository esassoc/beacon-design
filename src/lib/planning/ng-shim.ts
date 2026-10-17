// A small stand-in for the slice of @angular/forms and @angular/common the Beacon planning rules use, so Jamie's
// plan-*.ts rule modules (Beacon.Web/src/app/pages/plan-*/) port into this spoke line for line. Not a forms library:
// only what those modules call. Validators run on every value change; a group's value is its children's.

export type ValidationErrors = Record<string, unknown>;
export type ValidatorFn = (control: AbstractControl<any>) => ValidationErrors | null;

type Listener<T> = (value: T) => void;

/** The minimal Observable shape the drawers subscribe to (valueChanges). */
export class Emitter<T> {
  private listeners = new Set<Listener<T>>();
  subscribe(listener: Listener<T>): { unsubscribe(): void } {
    this.listeners.add(listener);
    return { unsubscribe: () => this.listeners.delete(listener) };
  }
  emit(value: T): void {
    this.listeners.forEach((l) => l(value));
  }
}

interface UpdateOptions {
  onlySelf?: boolean;
  emitEvent?: boolean;
}

export abstract class AbstractControl<TValue = any> {
  parent: AbstractControl | null = null;
  errors: ValidationErrors | null = null;
  touched = false;
  dirty = false;
  disabled = false;
  readonly valueChanges = new Emitter<TValue>();
  readonly statusChanges = new Emitter<string>();
  protected validators: ValidatorFn[] = [];

  abstract get value(): TValue;
  abstract getRawValue(): TValue;
  protected abstract childrenInvalid(): boolean;

  get valid(): boolean {
    return !this.invalid;
  }
  get invalid(): boolean {
    if (this.disabled) return false;
    return !!this.errors || this.childrenInvalid();
  }
  get enabled(): boolean {
    return !this.disabled;
  }

  setValidators(validators: ValidatorFn[]): void {
    this.validators = validators;
  }

  updateValueAndValidity(options: UpdateOptions = {}): void {
    this.errors = this.disabled ? null : this.runValidators();
    if (options.emitEvent !== false) {
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.invalid ? 'INVALID' : 'VALID');
    }
    if (!options.onlySelf && this.parent) this.parent.updateValueAndValidity(options);
  }

  protected runValidators(): ValidationErrors | null {
    let merged: ValidationErrors | null = null;
    for (const v of this.validators) {
      const e = v(this);
      if (e) merged = { ...(merged ?? {}), ...e };
    }
    return merged;
  }

  hasError(code: string): boolean {
    return !!this.errors && code in this.errors;
  }

  markAsTouched(): void {
    this.touched = true;
  }
  markAsUntouched(): void {
    this.touched = false;
  }
  markAsDirty(): void {
    this.dirty = true;
    this.parent?.markAsDirty();
  }
  markAsPristine(): void {
    this.dirty = false;
  }
  markAllAsTouched(): void {
    this.touched = true;
  }
  enable(options: UpdateOptions = {}): void {
    this.disabled = false;
    this.updateValueAndValidity(options);
  }
  disable(options: UpdateOptions = {}): void {
    this.disabled = true;
    this.updateValueAndValidity(options);
  }
}

export class FormControl<T = any> extends AbstractControl<T> {
  private current: T;
  private readonly initial: T;

  constructor(value: T, options: { nonNullable?: boolean; validators?: ValidatorFn[] } = {}) {
    super();
    this.current = value;
    this.initial = value;
    this.validators = options.validators ?? [];
    this.errors = this.runValidators();
  }

  get value(): T {
    return this.current;
  }
  getRawValue(): T {
    return this.current;
  }
  protected childrenInvalid(): boolean {
    return false;
  }

  setValue(value: T, options: UpdateOptions = {}): void {
    this.current = value;
    this.updateValueAndValidity(options);
  }
  patchValue(value: T, options: UpdateOptions = {}): void {
    this.setValue(value, options);
  }
  reset(value: T = this.initial, options: UpdateOptions = {}): void {
    this.current = value;
    this.touched = false;
    this.dirty = false;
    this.updateValueAndValidity(options);
  }
}

type ControlsOf<T> = { [K in keyof T]: AbstractControl<any> };
type ValueOf<C> = { [K in keyof C]: C[K] extends AbstractControl<infer V> ? V : never };

export class FormGroup<C extends Record<string, AbstractControl<any>> = Record<string, AbstractControl<any>>> extends AbstractControl<ValueOf<C>> {
  constructor(public readonly controls: C) {
    super();
    for (const control of Object.values(controls)) control.parent = this;
    // A cross-field validator reads its siblings through `parent`, so validate again now every control has one.
    for (const control of Object.values(controls)) control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  get value(): ValueOf<C> {
    const out: Record<string, unknown> = {};
    for (const [key, control] of Object.entries(this.controls)) if (!control.disabled) out[key] = control.value;
    return out as ValueOf<C>;
  }
  getRawValue(): ValueOf<C> {
    const out: Record<string, unknown> = {};
    for (const [key, control] of Object.entries(this.controls)) out[key] = control.getRawValue();
    return out as ValueOf<C>;
  }
  protected childrenInvalid(): boolean {
    return Object.values(this.controls).some((c) => c.invalid);
  }

  get(key: keyof C & string): C[typeof key] {
    return this.controls[key];
  }

  setValue(value: Partial<ValueOf<C>>, options: UpdateOptions = {}): void {
    for (const [key, v] of Object.entries(value)) (this.controls[key] as unknown as FormControl)?.setValue(v, { onlySelf: true, emitEvent: false });
    for (const control of Object.values(this.controls)) control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    this.updateValueAndValidity(options);
  }
  patchValue(value: Partial<ValueOf<C>>, options: UpdateOptions = {}): void {
    this.setValue(value, options);
  }
  reset(value?: Partial<ValueOf<C>>, options: UpdateOptions = {}): void {
    for (const [key, control] of Object.entries(this.controls)) {
      (control as unknown as FormControl).reset(value && key in value ? (value as Record<string, unknown>)[key] : undefined, { onlySelf: true, emitEvent: false });
    }
    for (const control of Object.values(this.controls)) control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    this.touched = false;
    this.dirty = false;
    this.updateValueAndValidity(options);
  }
  markAllAsTouched(): void {
    this.touched = true;
    Object.values(this.controls).forEach((c) => c.markAllAsTouched());
  }
  markAsPristine(): void {
    this.dirty = false;
    Object.values(this.controls).forEach((c) => c.markAsPristine());
  }
}

export class FormArray<C extends AbstractControl<any> = AbstractControl<any>> extends AbstractControl<Array<C extends AbstractControl<infer V> ? V : never>> {
  constructor(public controls: C[]) {
    super();
    controls.forEach((c) => (c.parent = this));
  }
  get length(): number {
    return this.controls.length;
  }
  get value(): any[] {
    return this.controls.filter((c) => !c.disabled).map((c) => c.value);
  }
  getRawValue(): any[] {
    return this.controls.map((c) => c.getRawValue());
  }
  protected childrenInvalid(): boolean {
    return this.controls.some((c) => c.invalid);
  }
  at(index: number): C {
    return this.controls[index];
  }
  push(control: C): void {
    control.parent = this;
    this.controls.push(control);
    this.updateValueAndValidity();
  }
  removeAt(index: number): void {
    this.controls.splice(index, 1);
    this.updateValueAndValidity();
  }
  markAllAsTouched(): void {
    this.touched = true;
    this.controls.forEach((c) => c.markAllAsTouched());
  }
}

export const Validators = {
  required(control: AbstractControl): ValidationErrors | null {
    const v = control.value;
    return v === null || v === undefined || v === '' ? { required: true } : null;
  },
  maxLength(max: number): ValidatorFn {
    return (control) => (typeof control.value === 'string' && control.value.length > max ? { maxlength: { requiredLength: max, actualLength: control.value.length } } : null);
  },
};

/** The first `message` an error carries — how Beacon's ui-field-error reads a control's error copy. */
export function controlErrorMessage(control: AbstractControl | null | undefined): string | null {
  if (!control?.errors) return null;
  for (const [key, value] of Object.entries(control.errors)) {
    if (value && typeof value === 'object' && 'message' in value) return String((value as { message: string }).message);
    if (key === 'required') return 'This field is required.';
    if (key === 'maxlength') return `Must be ${(value as { requiredLength: number }).requiredLength} characters or fewer.`;
  }
  return null;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * @angular/common formatDate for the patterns the planning modules use (MMMM, MMM, MM, M, dd, d, y, yyyy). A date-only
 * ISO string reads by its own Y-M-D parts, as Angular reads it, so it never shifts a day.
 */
export function formatDate(value: string | Date, format: string, _locale = 'en-US'): string {
  let y: number, m: number, d: number;
  if (typeof value === 'string') {
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
    if (!match) return value;
    [y, m, d] = [Number(match[1]), Number(match[2]), Number(match[3])];
  } else {
    [y, m, d] = [value.getFullYear(), value.getMonth() + 1, value.getDate()];
  }
  return format.replace(/MMMM|MMM|MM|M|dd|d|yyyy|y/g, (token) => {
    switch (token) {
      case 'MMMM': return MONTHS[m - 1];
      case 'MMM': return MONTHS[m - 1].slice(0, 3);
      case 'MM': return String(m).padStart(2, '0');
      case 'M': return String(m);
      case 'dd': return String(d).padStart(2, '0');
      case 'd': return String(d);
      default: return String(y);
    }
  });
}

/** The 4xx shape `planScheduleFieldErrors` reads. */
export class HttpErrorResponse {
  constructor(public readonly status: number, public readonly error: any) {}
}
