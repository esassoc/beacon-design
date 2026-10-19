# Obligation panel (move / retitle)

The side panel for one obligation ON THIS LIST. It offers exactly three things: a List title, a new home (Category + Subcategory), and a List description. It never edits the registry obligation.

## Key decisions
- Andy, 2026-09-23: "we don't want them to edit them, but that they can simply move them to other cat/sub-cats AND/OR add a list title or a list description."
- List title is an esa-text-field; leaving it empty falls back to the registry title.
- Category / Subcategory are esa-selects over the WHOLE registry taxonomy (so an obligation can move to a branch the list does not hold yet). Labels use this list's renames. Changing Category refills Subcategory.
- When the chosen home differs from the registry home, a hint reads "Registry: <Cat> › <Sub>".
- Save emits list:obligation-saved {memberId, listTitle, listDescription, catId/Name, subId/Name}. The tree creates any missing branch, re-files the card in title order, opens the path to it and flashes it.

## Gotchas
- Reopening a moved obligation must show its CURRENT list home in the pickers, not the registry home.
- The dot is recomputed on save; clearing both overrides removes it.

## Done when
- Moving "Fire Suppression Supplies On Site" into a subcategory the list does not hold yet creates that branch, re-files the card there, drops the emptied source branch, and on reopen shows "Registry: Hazards › Fire prevention".

## Markup
```html
<form
  class="bcn-swo-edit bcn-lob"
  data-list-obl-panel=""
  data-lob-data='{"records":{"obl_01M2G6YKM0HYHZPHBXBXTP9J34":{"title":"Fire Suppression Supplies On Site","catId":"hazards","subId":"fire","class":"adhere","classLabel":"Adhere","description":"Permittee shall keep basic fire suppression supplies on site at all times during construction of the Bethany Complex or while undertaking maintenance activities within the Bethany Complex.","trigger":"During construction of the\nBethany Complex or while undertaking maintenance activities within the Bethany Complex","reqs":[{"code":"COA 9.18","name":"Keep Basic Fire Suppression Supplies On Site at Bethany Complex","text":"Permittee shall keep basic fire suppression supplies on site at all times during construction of the\nBethany Complex or while undertaking maintenance activities within the Bethany Complex.","inActions":0}]},"obl_01M2G6Y3766PDKM5BW1NBAQNYD":{"title":"Vegetation clearing method for fire prevention","catId":"hazards","subId":"fire","class":"adhere","classLabel":"Adhere","description":"Hand removal of vegetation and/or weed whacking are the authorized methods for vegetation removal along access roads, staging areas, and work areas within the Bethany Complex prior to allowing heavy equipment and vehicles to access these project sites after Covered Species preconstruction surveys and installment of wildlife exclusion barriers.","trigger":"Prior to allowing\nheavy equipment and vehicles to access these project sites after Covered Species preconstruction\nsurveys and installment of wildlife exclusion barrier","reqs":[{"code":"COA 9.18","name":"Hand Clear Vegetation for Fire Prevention, Timed to Surveys and Exclusion Barriers","text":"Hand\nremoval of vegetation and/or weed whacking are the authorized methods for vegetation removal\nalong access roads, staging areas, and work areas within the Bethany Complex prior to allowing\nheavy equipment and vehicles to access these project sites after Covered Species preconstruction\nsurveys and installment of wildlife exclusion barriers.","inActions":0}]},"obl_01M2G6YKM0HYHZPHBXBXTP9J33":{"title":"Vegetation Clearing Method for Fire Prevention","catId":"hazards","subId":"fire","class":"adhere","classLabel":"Adhere","description":"Non-living vegetative debris shall be cleared from around the immediate work footprint.","trigger":"","reqs":[{"code":"COA 9.18","name":"Clear Non-Living Vegetative Debris from the Work Footprint","text":"Non-living vegetative debris shall be cleared from around\nthe immediate work footprint.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7D":{"title":"Concrete Washwater Containment","catId":"hazards","subId":"hazmat","class":"adhere","classLabel":"Adhere","description":"storage of concrete, wash water, and other contaminants in watertight containment structures","trigger":"","reqs":[{"code":"COA 11.22","name":"Contain Concrete and Wash Water in Watertight Structures","text":"storage of concrete, wash water, and other\ncontaminants in watertight containment structures","inActions":0},{"code":"COA 11.26","name":"Contain Concrete and Wash Water to Protect Surface Waters","text":"use of watertight forms and other containment structures to prevent\nspills or discharge of raw concrete, wash water, and other contaminants from entering surface\nwaters and other sensitive habitats.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7A":{"title":"Contaminated Soil Segregation and Removal","catId":"hazards","subId":"hazmat","class":"adhere","classLabel":"Adhere","description":"segregation, containment, and removal of contaminated soils to the approved disposal site","trigger":"","reqs":[{"code":"COA 11.21","name":"Segregate, Contain, and Remove Contaminated Soils","text":"segregation, containment, and\nremoval of contaminated soils to the approved disposal site","inActions":0}]},"obl_01M2G6Y3GTRYAK61ZHAYGX6G9Q":{"title":"Database of historic contamination and hazardous materials inspections","catId":"hazards","subId":"hazmat","class":"monitor","classLabel":"Monitor","description":"A database on known historic instances of contamination and results of any field inspections regarding the presence of hazardous materials shall be maintained.","trigger":"","reqs":[{"code":"COA 11.21","name":"Maintain Historic Contamination and Inspection Database","text":"A database on known historic instances of contamination and results of any field inspections regarding the\npresence of hazardous materials shall be maintained.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR78":{"title":"Hazardous Materials Container Labeling","catId":"hazards","subId":"hazmat","class":"adhere","classLabel":"Adhere","description":"clear labeling, handling, and safety instructions, and emergency contact information on hazardous material containers","trigger":"","reqs":[{"code":"COA 11.21","name":"Label Hazardous Material Containers","text":"clear labeling, handling, and safety instructions, and emergency contact\ninformation on hazardous material containers","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR77":{"title":"Hazardous Materials in Designated Storage","catId":"hazards","subId":"hazmat","class":"adhere","classLabel":"Adhere","description":"storage of fuel, oil, and other petroleum products at designated sites for hazardous materials","trigger":"","reqs":[{"code":"COA 11.21","name":"Designate Storage Sites for Fuel, Oil, and Petroleum Products","text":"storage of fuel, oil, and other petroleum products at designated sites for\nhazardous materials","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR79":{"title":"Hazardous Materials Storage Duration Limit","catId":"hazards","subId":"hazmat","class":"adhere","classLabel":"Adhere","description":"prohibition of the accumulation and temporary storage of hazardous materials exceeding 90 days","trigger":"","reqs":[{"code":"COA 11.21","name":"Limit Temporary Hazardous Materials Storage to 90 Days","text":"prohibition of the accumulation\nand temporary storage of hazardous materials exceeding 90 days","inActions":0}]},"obl_01M2G6Y40FW7TYCC8DP1VT56RD":{"title":"Material Safety Data Sheets provided to site personnel","catId":"hazards","subId":"hazmat","class":"adhere","classLabel":"Adhere","description":"Material Safety Data Sheets provided to all Project site personnel","trigger":"","reqs":[{"code":"COA 11.21","name":"Provide Material Safety Data Sheets to Site Personnel","text":"Material Safety Data Sheets provided to all Project site personnel","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7G":{"title":"Petroleum Storage Containment","catId":"hazards","subId":"hazmat","class":"adhere","classLabel":"Adhere","description":"storage of petroleum products in non-leaking containers at impervious storage sites from which an accidental spills cannot escape","trigger":"","reqs":[{"code":"COA 11.22","name":"Store Petroleum Products at Impervious Storage Sites","text":"storage of petroleum products in non-leaking containers at impervious storage sites\nfrom which an accidental spills cannot escape","inActions":0}]},"obl_01M2G6Y3GVB9GY756CNBCP3THB":{"title":"Daily contaminant leak check and maintenance of vehicles and equipment","catId":"hazards","subId":"refueling","class":"monitor","classLabel":"Monitor","description":"Any equipment or vehicles driven and/or operated in or adjacent to Project construction sites shall be checked daily and maintained in good working order to prevent the release of contaminants that, if introduced to water, could be deleterious to aquatic life, wildlife, or riparian habitat.","trigger":"If introduced to water, could be deleterious to aquatic life, wildlife, or riparian habitat","reqs":[{"code":"COA 9.13","name":"Daily Inspect and Maintain Vehicles to Prevent Contaminant Release","text":"Any equipment or vehicles driven and/or operated in or adjacent to Project construction sites shall\nbe checked daily and maintained in good working order to prevent the release of contaminants that,\nif introduced to water, could be deleterious to aquatic life, wildlife, or riparian habitat. If a vehicle is\nfound to be leaking fluids of any kind, it shall be placed into secondary containment immediately.","inActions":0}]},"obl_01M2G6Y3GTRYAK61ZHAYGX6G9R":{"title":"Daily inspection of equipment in contact with water for petroleum leaks","catId":"hazards","subId":"refueling","class":"monitor","classLabel":"Monitor","description":"daily inspection of equipment for oil, grease, and other petroleum products if equipment is in contact with water","trigger":"If equipment is in contact with water","reqs":[{"code":"COA 11.22","name":"Inspect Water-Contact Equipment Daily for Petroleum Leaks","text":"daily inspection of\nequipment for oil, grease, and other petroleum products if equipment is in contact with water","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7J":{"title":"Fuel Transfer Containment","catId":"hazards","subId":"refueling","class":"adhere","classLabel":"Adhere","description":"using spills containment materials under transfer areas when transferring oil or other hazardous materials from trucks to storage containers","trigger":"When\ntransferring oil or other hazardous materials from trucks to storage containers","reqs":[{"code":"COA 11.22","name":"Use Spill Containment Materials Under Fuel Transfer Areas","text":"using spills containment materials under transfer areas when\ntransferring oil or other hazardous materials from trucks to storage containers","inActions":0}]},"obl_01M2G6YKM0HYHZPHBXBXTP9J2Y":{"title":"Refueling Practices","catId":"hazards","subId":"refueling","class":"adhere","classLabel":"Adhere","description":"Vehicles shall be kept away from all sensitive areas and positioned over drip pans or other suitable secondary containment prior to refueling.","trigger":"","reqs":[{"code":"COA 9.13","name":"Contain and Attend Vehicle Refueling Operations","text":"Vehicles shall be kept away from all sensitive areas and positioned over drip pans or other suitable\nsecondary containment prior to refueling.","inActions":0}]},"obl_01M2G6YKM0HYHZPHBXBXTP9J2Z":{"title":"Refueling Setback from Water","catId":"hazards","subId":"refueling","class":"adhere","classLabel":"Adhere","description":"All reserve fuel supplies shall be stored only within the confines of the designated staging areas, a minimum of 200 feet from surface waters and other sensitive habitats, such as wetlands.","trigger":"","reqs":[{"code":"COA 9.13","name":"Keep Refueling, Maintenance and Fuel Storage 200 Feet from Water","text":"All\nreserve fuel supplies shall be stored only within the confines of the designated staging areas, a\nminimum of 200 feet from surface waters and other sensitive habitats, such as wetlands.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7C":{"title":"Equipment Cleaning Before Water Contact","catId":"hazards","subId":"spills","class":"adhere","classLabel":"Adhere","description":"cleaning of external petroleum products off of equipment prior to its contact to water","trigger":"Prior to its contact to water","reqs":[{"code":"COA 11.22","name":"Clean Petroleum Products Off Equipment Before Water Contact","text":"cleaning of external petroleum products off of equipment prior to its contact to water","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7H":{"title":"Oil Absorbent Booms in Place","catId":"hazards","subId":"spills","class":"adhere","classLabel":"Adhere","description":"use of oil- absorbent booms for equipment used in or adjacent to water","trigger":"","reqs":[{"code":"COA 11.22","name":"Use Oil-Absorbent Booms Near Water","text":"use of oil-\nabsorbent booms for equipment used in or adjacent to water","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7E":{"title":"Spill Containment and Response","catId":"hazards","subId":"spills","class":"adhere","classLabel":"Adhere","description":"In the event of an accidental spill, personnel shall identify and secure the source of the discharge and contain the discharge with sorbents, sandbags, or other material from spill kits","trigger":"In the event of an accidental spill, personnel shall identify and\nsecure the source of the discharge and contain the discharge with sorbents, sandbags, or other\nmaterial fr","reqs":[{"code":"COA 11.22","name":"Contain the Source of an Accidental Spill","text":"In the event of an accidental spill, personnel shall identify and\nsecure the source of the discharge and contain the discharge with sorbents, sandbags, or other\nmaterial from spill kits","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7B":{"title":"Spill Kits On Site","catId":"hazards","subId":"spills","class":"adhere","classLabel":"Adhere","description":"site-specific emergency spill containment and spill kits at every work site","trigger":"","reqs":[{"code":"COA 11.21","name":"Stage Spill Containment and Kits at Every Work Site","text":"site-specific emergency spill\ncontainment and spill kits at every work site","inActions":0},{"code":"COA 11.22","name":"Maintain Spill Containment Materials in Sealed Containers","text":"storing and maintaining spill containment\nmaterials such as absorbent pads, pillows, socks, booms, and other spill containment materials in\nnon-leaking sealed containers at the hazardous materials storage sites until transport to an appropriate disposal facility","inActions":0}]},"obl_01M2G6YKM0HYHZPHBXBXTP9J30":{"title":"Spill Response","catId":"hazards","subId":"spills","class":"adhere","classLabel":"Adhere","description":"Permittee shall immediately stop and, pursuant to pertinent state and federal statutes and regulations, arrange for repair and clean up by qualified individuals of any fuel or hazardous waste leaks or spills at the time of occurrence, or as soon as it is safe to do so.","trigger":"","reqs":[{"code":"COA 9.14","name":"Immediately Stop and Clean Up Fuel and Hazardous Waste Spills","text":"Permittee shall immediately stop and, pursuant to pertinent state and federal statutes and\nregulations, arrange for repair and clean up by qualified individuals of any fuel or hazardous waste\nleaks or spills at the time of occurrence, or as soon as it is safe to do so.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR7F":{"title":"Staging Area Spill Containment","catId":"hazards","subId":"spills","class":"adhere","classLabel":"Adhere","description":"containment of contaminants in staging areas designed so that should an accidental spill occur, contaminants do not drain toward receiving waters or storm drain inlets; and staging of all stationary equipment in appropriate staging areas and positioned over drip pans.","trigger":"Should an accidental spill occur, contaminants do not drain toward\nreceiving waters or storm drain inlets","reqs":[{"code":"COA 11.22","name":"Design Staging Areas to Prevent Spill Drainage to Waters","text":"containment of contaminants in\nstaging areas designed so that should an accidental spill occur, contaminants do not drain toward\nreceiving waters or storm drain inlets; and staging of all stationary equipment in appropriate staging\nareas and positioned over drip pans.","inActions":0}]},"obl_01M2G6Y3XH28NAN3AB46Q787QJ":{"title":"Access road location assessment before visual barrier installation","catId":"lighting","subId":"lighting-habitat","class":"monitor","classLabel":"Monitor","description":"The Designated Biologist(s) and/or Biological Monitor(s) shall assess the locations of the identified access roads prior to the installation of any visual barriers.","trigger":"Prior to the installation\nof any visual barriers","reqs":[{"code":"COA 11.10","name":"Assess Access Road Locations Before Visual Barrier Installation","text":"The Designated Biologist(s) and/or\nBiological Monitor(s) shall assess the locations of the identified access roads prior to the installation\nof any visual barriers.","inActions":0}]},"obl_01M2G6YKKZS8T1WDX0E4QXHYGA":{"title":"Intake Lighting Restricted from the River Channel","catId":"lighting","subId":"lighting-habitat","class":"adhere","classLabel":"Adhere","description":"Temporary lighting on the north Delta intake structure or buildings associated with the north Delta intakes may be utilized for CDFW approved construction phase nighttime Covered Activities.","trigger":"During approved construction phase Covered Activities shall not be positioned such that lux can\nintersect the river channel, to the greatest extent possible","reqs":[{"code":"COA 11.9","name":"Position Temporary Construction Lighting to Avoid the River Channel","text":"Temporary lighting on the north\nDelta intake structure or buildings associated with the north Delta intakes may be utilized for CDFW\napproved construction phase nighttime Covered Activities. Temporary lighting for worker safety\nduring approved construction phase Covered Activities shall not be positioned such that lux can\nintersect the river channel, to the greatest extent possible. All lights along the river channel shall\ncomply with U.S. Coast Guard criteria and regulations.","inActions":0},{"code":"COA 11.9","name":"Prohibit Permanent Intake Lighting Toward the Sacramento River","text":"Permittee shall not permanently mount any lighting on the north Delta intake structure or buildings\nassociated with the north Delta intake structures that will produce lux in the direction of the\nSacramento River, to minimize predation effects on juvenile CHNWR and CHNSR from artificial\nlighting at night. Permanent lighting shall not be positioned such that lux can intersect the river\nchannel at any angle regardless of vertical angle of the light source.","inActions":0}]},"obl_01M2G6YKKZS8T1WDX0E4QXHYG8":{"title":"Lighting Color Near Habitat","catId":"lighting","subId":"lighting-habitat","class":"adhere","classLabel":"Adhere","description":"All construction lighting used within 500 feet of Covered Species suitable habitat shall be yellow or orange lighting.","trigger":"","reqs":[{"code":"COA 11.8","name":"Use Yellow or Orange Lighting Near Covered Species Habitat","text":"All construction lighting used within 500 feet of Covered Species suitable\nhabitat shall be yellow or orange lighting.","inActions":0}]},"obl_01M2G6YKKYBZ9A7EECEZB6FGY6":{"title":"Night Lighting Spill Control","catId":"lighting","subId":"lighting-habitat","class":"adhere","classLabel":"Adhere","description":"If night work is required within a Project construction site after exclusion barriers have been installed, Permittee shall not use artificial lighting unless it is needed for worker safety. 8.","trigger":"If night work is required within a Project construction site after exclusion barriers have been installed,\nPermittee shall not use artificial lighting unless it i","reqs":[{"code":"COA 11.47","name":"Restrict Night-Work Lighting to Worker Safety Uses","text":"If night work is required within a Project construction site after exclusion barriers have been installed,\nPermittee shall not use artificial lighting unless it is needed for worker safety. Where artificial lighting\nis required for worker safety, Permittee shall follow night lighting provisions in Condition of Approval 11.8.","inActions":0},{"code":"COA 11.8","name":"Shield and Limit Nighttime Lighting Spill Toward Habitat","text":"Permittee shall not use permanent or temporary, fixed, exterior lighting, including motion-triggered security lighting that\ncasts light on Covered Species habitat beyond the Project construction site between sunset and\nsunrise. Project-related lighting shall not result in significant illumination beyond the immediate\nProject construction site. Nighttime lighting during all Covered Activities shall be shielded and\noriented downward to minimize effects on any nearby Covered Species. All lights,…","inActions":0}]},"obl_01M2G6YKKZS8T1WDX0E4QXHYFQ":{"title":"Equipment Confined to Access Routes","catId":"site","subId":"access-routes","class":"adhere","classLabel":"Adhere","description":"Project-related vehicles shall access the Project construction site(s) during Covered Activities using existing routes and shall not cross GGS habitat outside of the Project construction site(s) unless otherwise authorized by CDFW.","trigger":"During Covered Activities using existing routes and shall not cross GGS habitat\noutside of the Project construction site(s) unless otherwise authorized by CDFW","reqs":[{"code":"COA 11.55.1","name":"Confine Project Vehicles to Existing Routes","text":"Project-related vehicles shall access the Project\nconstruction site(s) during Covered Activities using existing routes and shall not cross GGS habitat\noutside of the Project construction site(s) unless otherwise authorized by CDFW.","inActions":0},{"code":"COA 11.69","name":"Confine Project Access and Vehicle Traffic to Existing Routes","text":"Project personnel shall access Project construction sites using existing routes and shall not cross\nSWHA habitat outside of or enroute to the Project construction site(s) unless otherwise approved by\nCDFW. Permittee shall restrict Project-related vehicle traffic to established roads, staging, and\nparking areas.","inActions":0}]},"obl_01M2G6Y374X4RKETDHB3S1M1N3":{"title":"Equipment confined to designated access routes","catId":"site","subId":"access-routes","class":"adhere","classLabel":"Adhere","description":"Permittee shall confine movement of heavy equipment to existing or CDFW-approved access roads or to locations at least 75 feet from flagged burrows. 11.","trigger":"","reqs":[{"code":"COA 11.41","name":"Confine Heavy Equipment to Approved Access Routes","text":"Permittee shall confine movement of heavy equipment to existing or CDFW-approved\naccess roads or to locations at least 75 feet from flagged burrows. Vehicles shall follow the\nshortest possible routes from existing roads to the work site and shall follow speed limits\nconsistent with Condition of Approval 11.11.","inActions":0},{"code":"COA 11.65","name":"Confine Equipment Movement and Limit Vehicle Speed in Upland Habitat","text":"Permittee shall confine movement of heavy equipment to existing access roads or to locations\noutside of suitable GGS upland habitat to the extent practicable. • Project personnel shall limit vehicle speed to 10 miles per hour within exploration sites and on\nnon-public access roads.","inActions":0}]},"obl_01M2G6YKM0HYHZPHBXBXTP9J2X":{"title":"Equipment Storage Setback from Aquatic Habitat","catId":"site","subId":"access-routes","class":"adhere","classLabel":"Adhere","description":"Permittee shall store equipment, supplies, and vehicles, and conduct vehicle and equipment services within the Project construction site at least 200 feet from suitable Covered Species aquatic habitat and/or other designated staging/storage areas.","trigger":"","reqs":[{"code":"COA 9.11","name":"Store Equipment and Vehicles 200 Feet from Aquatic Habitat","text":"Permittee shall store\nequipment, supplies, and vehicles, and conduct vehicle and equipment services within the Project\nconstruction site at least 200 feet from suitable Covered Species aquatic habitat and/or other\ndesignated staging/storage areas.","inActions":0}]},"obl_01M2G6YKM0HYHZPHBXBXTP9J2W":{"title":"Staging Area Confinement","catId":"site","subId":"access-routes","class":"adhere","classLabel":"Adhere","description":"Permittee shall confine all Project-related parking, storage areas, laydown sites, equipment storage, and any other surface-disturbing activities to the Project construction site using, to the extent possible, previously disturbed areas such as paved or previously cleared areas.","trigger":"","reqs":[{"code":"COA 9.11","name":"Confine Staging and Laydown to Disturbed Areas Within the Site","text":"Permittee shall confine all Project-related parking, storage areas, laydown sites, equipment storage,\nand any other surface-disturbing activities to the Project construction site using, to the extent\npossible, previously disturbed areas such as paved or previously cleared areas. Staging areas shall be\nidentified within the appropriate Project Phase Authorization Package.","inActions":0}]},"obl_01M2G6YKKZS8T1WDX0E4QXHYGK":{"title":"Use of Established Access Routes","catId":"site","subId":"access-routes","class":"adhere","classLabel":"Adhere","description":"All Project personnel shall access the Project construction site and any Project maintenance area using existing and established routes identified in the Project Description and shall not cross Covered Species’ habitat outside of or enroute to the Project construction site or maintenance area unless authorized by CDFW through Conditions of Approval in this ITP.","trigger":"","reqs":[{"code":"COA 9.10","name":"Confine Site Access and Vehicle Travel to Established Routes","text":"All Project personnel shall access the Project construction site and any Project maintenance area\nusing existing and established routes identified in the Project Description and shall not cross Covered\nSpecies’ habitat outside of or enroute to the Project construction site or maintenance area unless\nauthorized by CDFW through Conditions of Approval in this ITP. All ingress/egress at the Project\nconstruction site shall be restricted to those routes identified in the Project Description.","inActions":0},{"code":"COA 9.11","name":"Confine Activity to the Marked Site, Avoiding Covered Species Habitat","text":"Permittee shall not use or cross Covered Species&apos;\nhabitat outside of the marked Project construction site unless authorized by CDFW consistent with\nCondition of Approval 9.10.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR74":{"title":"No Pets, Campfires or Firearms On Site","catId":"site","subId":"pets-firearms","class":"adhere","classLabel":"Adhere","description":"Permittee shall not permit pets, campfires, or firearms in Project construction sites and site access routes, except firearms carried by authorized security personnel or local, state, or federal law enforcement officials.","trigger":"","reqs":[{"code":"COA 11.20","name":"Prohibit Pets, Campfires, and Firearms at Construction Sites","text":"Permittee shall not permit pets, campfires, or firearms in Project construction sites and site access\nroutes, except firearms carried by authorized security personnel or local, state, or federal law\nenforcement officials.","inActions":0}]},"obl_01M2G6YKKJFSBZ7MC77J15GFVF":{"title":"Nighttime Speed Limit","catId":"site","subId":"speed-limits","class":"adhere","classLabel":"Adhere","description":", outside the “dry season” defined as July 15-Oct 15) to avoid potential vehicle strikes of CTS.","trigger":"","reqs":[{"code":"COA 11.11","name":"Enforce Nighttime 10 MPH Limit at Bethany Complex","text":"Project vehicles shall observe a nighttime speed limit of 10 miles per hour in Project construction sites within the Bethany\nComplex between October 16 through July 14 (i.e., outside the “dry season” defined as July 15-Oct 15) to avoid potential vehicle strikes of CTS.","inActions":0}]},"obl_01M2G6YKKJFSBZ7MC77J15GFVH":{"title":"Paved Road Speed Limit","catId":"site","subId":"speed-limits","class":"adhere","classLabel":"Adhere","description":"Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public Project access roads and in construction and maintenance sites.","trigger":"","reqs":[{"code":"COA 11.11","name":"Enforce Project Vehicle Speed Limits on Access Roads","text":"Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public\nProject access roads and in construction and maintenance sites. Vehicles on paved, non-public\nProject access roads shall observe a maximum speed limit of 30 miles per hour.","inActions":0}]},"obl_01M2G6YKKVAVAZP863Q0VNAW3E":{"title":"Speed Limit Near Habitat","catId":"site","subId":"speed-limits","class":"adhere","classLabel":"Adhere","description":"Project vehicles shall observe a 10 mile per hour speed limit on paved, non-public access roads where they occur within 200 feet of GGS habitat during the active season (May 1 – October 1) except where exclusion fencing has been installed, in which case Project vehicles may observe a speed limit of up to 30 miles per hour.","trigger":"During the\nactive season (May 1 – October 1) except where exclusion fencing has been installed, in which case\nProject vehicles may observe a speed limit of up to 30 m","reqs":[{"code":"COA 11.11","name":"Limit Speed Near GGS Habitat During Active Season","text":"Project vehicles shall observe a 10 mile per hour speed\nlimit on paved, non-public access roads where they occur within 200 feet of GGS habitat during the\nactive season (May 1 – October 1) except where exclusion fencing has been installed, in which case\nProject vehicles may observe a speed limit of up to 30 miles per hour.","inActions":0},{"code":"COA 11.39.1","name":"Observe 10 MPH Speed Limits in CTS Habitat and Near Burrows","text":"Project-related vehicles shall observe a speed limit of 10 miles per hour\nwithin suitable CTS habitat prior to ground clearance. After ground clearance, the speed limit\nshall be observed within 300 feet of suitable aquatic habitat or 75 feet from a flagged burrow,\nexcept on roads where 10 miles per hour would unsafely impede the normal flow of traffic.","inActions":0},{"code":"COA 11.55.1","name":"Observe Vehicle Speed Limits in GGS Upland Habitat","text":"Project-related\nvehicle traffic shall observe speed limits consistent with Condition of Approval 11.11 in Project\nconstruction sites and access roads within suitable GGS upland habitat.","inActions":0}]},"obl_01M2G6YKKW469S9XKYKCE1V6XV":{"title":"Speed Limit Posting","catId":"site","subId":"speed-limits","class":"adhere","classLabel":"Adhere","description":"Speeds limits shall be enforced and posted in both directions.","trigger":"During Project construction, operations, and maintenance","reqs":[{"code":"COA 11.11","name":"Post Speed Limit and Wildlife Crossing Signage","text":"Speeds limits shall be\nenforced and posted in both directions. Wildlife crossing signs and signage requiring extra caution\nshall be posted in both directions on all Project access roads that overlap with CTS and GGS aquatic\nand upland habitat during Project construction, operations, and maintenance.","inActions":0}]},"obl_01M2G6YKKJFSBZ7MC77J15GFVG":{"title":"Unpaved Road Speed Limit","catId":"site","subId":"speed-limits","class":"adhere","classLabel":"Adhere","description":"Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public Project access roads and in construction and maintenance sites.","trigger":"","reqs":[{"code":"COA 11.11","name":"Enforce Project Vehicle Speed Limits on Access Roads","text":"Project vehicles shall observe a maximum speed limit of 10 miles per hour on unpaved non-public\nProject access roads and in construction and maintenance sites. Vehicles on paved, non-public\nProject access roads shall observe a maximum speed limit of 30 miles per hour.","inActions":0},{"code":"COA 11.29","name":"Limit Vehicle Speed on Unpaved Roads to 10 MPH","text":"limiting vehicle speeds on unpaved roads\nto 10 miles per hour","inActions":0}]},"obl_01M2G6YKKW469S9XKYKCE1V6XW":{"title":"Wildlife Crossing Signage","catId":"site","subId":"speed-limits","class":"adhere","classLabel":"Adhere","description":"Speeds limits shall be enforced and posted in both directions.","trigger":"During Project construction, operations, and maintenance","reqs":[{"code":"COA 11.11","name":"Post Speed Limit and Wildlife Crossing Signage","text":"Speeds limits shall be\nenforced and posted in both directions. Wildlife crossing signs and signage requiring extra caution\nshall be posted in both directions on all Project access roads that overlap with CTS and GGS aquatic\nand upland habitat during Project construction, operations, and maintenance.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR76":{"title":"Covered Food Waste Containers","catId":"site","subId":"trash","class":"adhere","classLabel":"Adhere","description":"To avoid attracting predators, Permittee shall ensure Project personnel dispose of all food-related trash items such as packaging, cans, bottles, and food scraps in enclosed containers.","trigger":"","reqs":[{"code":"COA 11.20","name":"Store Food-Related Trash in Enclosed Containers","text":"To avoid attracting predators, Permittee shall ensure Project personnel\ndispose of all food-related trash items such as packaging, cans, bottles, and food scraps in enclosed\ncontainers.","inActions":0}]},"obl_01M2G6YKM0HYHZPHBXBXTP9J35":{"title":"Trash Abatement","catId":"site","subId":"trash","class":"adhere","classLabel":"Adhere","description":"Permittee shall initiate a trash abatement program before starting Covered Activities and shall continue the program for the duration of the Project.","trigger":"Before starting Covered Activities and shall\ncontinue the program for the duration of the Project","reqs":[{"code":"COA 9.6","name":"Maintain Trash Abatement Program with Animal-Proof Containers","text":"Permittee shall initiate a trash abatement program before starting Covered Activities and shall\ncontinue the program for the duration of the Project. Permittee shall ensure that trash and food\nitems are contained in animal-proof containers and removed, ideally at daily intervals but at least\nonce a week, to avoid attracting opportunistic predators such as ravens, coyotes, and feral dogs.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR73":{"title":"Trash Load Covering","catId":"site","subId":"trash","class":"adhere","classLabel":"Adhere","description":"Vehicles carrying trash shall have loads covered and secured to prevent trash and debris from falling onto roads and adjacent properties.","trigger":"","reqs":[{"code":"COA 11.20","name":"Cover and Secure Loads on Trash-Hauling Vehicles","text":"Vehicles carrying trash\nshall have loads covered and secured to prevent trash and debris from falling onto roads and\nadjacent properties.","inActions":0}]},"obl_01M2G6YKKXGW0MHG5S1F0JJR75":{"title":"Trash Removal Cadence","catId":"site","subId":"trash","class":"adhere","classLabel":"Adhere","description":"6).","trigger":"Once a week from the construction or Project site (see Condition of\nApproval 9","reqs":[{"code":"COA 11.20","name":"Remove Trash from Site Weekly","text":"Permittee shall ensure trash is removed from the construction site and taken to an\nappropriate facility at least once a week from the construction or Project site (see Condition of\nApproval 9.6).","inActions":0}]},"obl_01M2G6YKKYBZ9A7EECEZB6FGY5":{"title":"Daytime Work Hour Limit","catId":"site","subId":"work-hours","class":"adhere","classLabel":"Adhere","description":"During the CTS active season or within 300 feet of suitable CTS aquatic habitat, Permittee shall terminate all Covered Activities not encircled by an exclusion barrier, including use and/or construction of access roads for preconstruction activities, SCADA and transmission line construction and maintenance, and facility maintenance no less than 30 minutes before sunset and shall not resume Covered Activities until 30 minutes after sunrise.","trigger":"During the CTS active\nseason or within 300 feet of suitable CTS aquatic habitat, Permittee shall terminate all Covered\nActivities not encircled by an exclusion barrie","reqs":[{"code":"COA 11.46","name":"Restrict Covered Activities to Daylight Hours in CTS Active Season","text":"During the CTS active\nseason or within 300 feet of suitable CTS aquatic habitat, Permittee shall terminate all Covered\nActivities not encircled by an exclusion barrier, including use and/or construction of access roads for\npreconstruction activities, SCADA and transmission line construction and maintenance, and facility\nmaintenance no less than 30 minutes before sunset and shall not resume Covered Activities until 30\nminutes after sunrise. Permittee shall use sunrise and sunset times…","inActions":0},{"code":"COA 11.7","name":"Restrict Covered Activities to Daylight Hours","text":"Covered Activities shall cease 30 minutes before sunset and shall not resume until 30 minutes after\nsunrise, unless Permittee obtains approval by CDFW as part of the appropriate Construction Phase\nAuthorization Package (Condition of Approval 6.2).","inActions":0}]},"obl_01M2G6YKKZS8T1WDX0E4QXHYG4":{"title":"Night Vehicle Travel Caution","catId":"site","subId":"work-hours","class":"adhere","classLabel":"Adhere","description":"Any vehicle traffic necessary during nighttime hours associated with emergency response, security, or operations and maintenance activities subsequent to construction shall be conducted with extra caution to minimize impacts to nocturnal Covered Species.","trigger":"During\nnighttime hours associated with emergency response, security, or operations and maintenance\nactivities subsequent to construction shall be conducted with extra","reqs":[{"code":"COA 11.7","name":"Exercise Caution for Nighttime Vehicle Travel After Construction","text":"Any vehicle traffic necessary during\nnighttime hours associated with emergency response, security, or operations and maintenance\nactivities subsequent to construction shall be conducted with extra caution to minimize impacts to\nnocturnal Covered Species.","inActions":0}]}},"taxonomy":[{"id":"agency","name":"Agency reporting and approvals","subs":[{"id":"sightings-reporting","name":"Species sightings and CNDDB reporting"},{"id":"take-reporting","name":"Take and injury reporting"}]},{"id":"air","name":"Air quality","subs":[{"id":"fugitive-dust","name":"Fugitive dust"}]},{"id":"herps","name":"Amphibians and reptiles","subs":[{"id":"amphibians","name":"Amphibians"},{"id":"ggs","name":"Giant garter snake"}]},{"id":"birds","name":"Birds","subs":[{"id":"nesting-birds","name":"Nesting birds"}]},{"id":"fish","name":"Fish","subs":[{"id":"fish","name":"Fish rescue and salvage"}]},{"id":"habitat","name":"Habitat protection","subs":[{"id":"esas-fencing","name":"Exclusion fencing and ESAs"},{"id":"habitat-avoidance","name":"Habitat avoidance and work footprint"},{"id":"impact-tracking","name":"Habitat impact tracking"},{"id":"vegetation","name":"Vegetation removal"},{"id":"encounters","name":"Wildlife encounters and handling"},{"id":"entrapment","name":"Wildlife entrapment"}]},{"id":"hazards","name":"Hazards","subs":[{"id":"fire","name":"Fire prevention"},{"id":"hazmat","name":"Hazardous materials"},{"id":"pesticides","name":"Pesticides and rodenticides"},{"id":"refueling","name":"Refueling and equipment servicing"},{"id":"spills","name":"Spill prevention and response"}]},{"id":"lighting","name":"Lighting","subs":[{"id":"lighting-habitat","name":"Lighting near habitat and waters"}]},{"id":"mitigation","name":"Mitigation and restoration","subs":[{"id":"sub-mitigation-and-restoration-mitigation-funding","name":"Mitigation funding"},{"id":"mitigation-lands","name":"Mitigation lands"},{"id":"restoration","name":"Restoration"}]},{"id":"noise","name":"Noise and vibration","subs":[{"id":"underwater-sound","name":"Pile driving and underwater sound"}]},{"id":"people","name":"People and qualifications","subs":[{"id":"biologists","name":"Designated biologists and monitors"},{"id":"specialists","name":"Qualified specialists"}]},{"id":"plants-inverts","name":"Plants and invertebrates","subs":[{"id":"bees-monarchs","name":"Bumble bees and monarchs"},{"id":"plants","name":"Special-status plants"}]},{"id":"site","name":"Site conduct","subs":[{"id":"access-routes","name":"Access routes and parking"},{"id":"agency-access","name":"Agency and biologist access"},{"id":"compliance-inspections","name":"Compliance inspections and records"},{"id":"facility-design","name":"Facility design and siting"},{"id":"pets-firearms","name":"Pets, firearms and campfires"},{"id":"speed-limits","name":"Speed limits"},{"id":"trash","name":"Trash and food waste"},{"id":"work-hours","name":"Work hours"}]},{"id":"water","name":"Water","subs":[{"id":"barges","name":"Barge and vessel operations"},{"id":"dewatering","name":"Dewatering"},{"id":"erosion","name":"Erosion and sediment control"},{"id":"in-water-work","name":"In-water work"},{"id":"invasive-species","name":"Invasive species"},{"id":"stormwater","name":"Stormwater and discharges"}]},{"id":"operations","name":"Water operations","subs":[{"id":"biological-criteria","name":"Biological performance criteria"},{"id":"diversion-limits","name":"Diversion limits and bypass flows"},{"id":"fish-screens","name":"Fish screens"},{"id":"ops-coordination","name":"Operations coordination and data"},{"id":"ops-monitoring","name":"Operations monitoring and studies"}]}]}'
  data-class="adhere"
>
  <!-- The dialog heading is the REGISTRY title. The list's own, when it has one,
      is the field below it. --><esa-text-field
    label="List title"
    size="sm"
    name="lob-title"
    help-text="Leave this empty and the list uses the registry title."
  ></esa-text-field>
  <div class="bcn-lob__field">
    <span class="bcn-swo-edit__label">Class</span
    ><span><span class="bcn-lob__class" data-lob="class">Adhere</span></span>
  </div>
  <div class="bcn-lob__field">
    <div class="bcn-swo-edit__pair">
      <esa-select label="Category" size="sm" name="lob-cat"></esa-select
      ><esa-select label="Subcategory" size="sm" name="lob-sub"></esa-select>
    </div>
    <span class="bcn-lob__registry" data-lob="home" hidden=""
      >Registry: Hazards › Fire prevention</span
    >
  </div>
  <div class="bcn-lob__field">
    <span class="bcn-swo-edit__label">Registry description</span>
    <p class="bcn-lob__prose" data-lob="description" data-superseded="true">
      Permittee shall keep basic fire suppression supplies on site at all times during
      construction of the Bethany Complex or while undertaking maintenance activities
      within the Bethany Complex.
    </p>
  </div>
  <esa-textarea
    label="List description"
    size="sm"
    rows="4"
    name="lob-description"
    help-text="Leave this empty and the list uses the registry description."
  ></esa-textarea>
  <div class="bcn-lob__field">
    <span class="bcn-swo-edit__label">Trigger</span>
    <p class="bcn-lob__prose" data-lob="trigger">
      During construction of the Bethany Complex or while undertaking maintenance
      activities within the Bethany Complex
    </p>
  </div>
  <div class="bcn-swo-edit__section">
    <div class="bcn-swo-edit__label-row">
      <span class="bcn-swo-edit__label"
        >Requirements <span class="bcn-swo-edit__label-n" data-lob-req-n="">1</span></span
      >
    </div>
    <div class="bcn-swo-edit__reqs" data-lob-reqs="">
      <details class="bcn-swo-edit__req">
        <summary class="bcn-swo-edit__req-row">
          <span class="bcn-swo-edit__chev" aria-hidden="true"
            ><span class="esa-icon esa-icon--xs" aria-hidden="true"
              ><svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-swo-edit__code">COA 9.18</span
          ><span class="bcn-swo-edit__req-name"
            >Keep Basic Fire Suppression Supplies On Site at Bethany Complex</span
          ><span class="bcn-swo-edit__also"></span>
        </summary>
        <blockquote class="bcn-swo-edit__text">
          Permittee shall keep basic fire suppression supplies on site at all times during
          construction of the Bethany Complex or while undertaking maintenance activities
          within the Bethany Complex.
        </blockquote>
      </details>
    </div>
  </div>
</form>
```

## Styles
```css
.bcn-lob__field {
  gap: var(--spacing-050);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-lob__prose {
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-lob__prose[data-superseded="true"] {
  color: var(--color-content-default-tertiary);
}
.bcn-lob__registry {
  color: var(--color-content-default-tertiary);
  font-size: 0.6875rem;
}
.bcn-lob__registry[hidden] {
  display: none;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swo-edit {
  gap: var(--spacing-400);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swo-edit__pair {
  gap: var(--spacing-300);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: start;
  display: grid;
}
.bcn-swo-edit__section {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-swo-edit__label-row {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-swo-edit__label {
  color: var(--form-label-color, #646464);
  font-size: 0.75rem;
  font-weight: 500;
}
.bcn-swo-edit__label-n {
  color: var(--color-content-default-tertiary);
  margin-left: var(--spacing-100);
  font-weight: 400;
}
.bcn-swo-edit__empty {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.75rem;
  font-style: italic;
}
.bcn-swo-edit__verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-swo-edit__reqs {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-swo-edit__reqs:empty {
  border-top: none;
}
.bcn-swo-edit__req {
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-swo-edit__req.is-new {
  background: color-mix(in srgb, var(--color-obligation) 10%, white);
}
.bcn-swo-edit__req-row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 30px;
  padding: var(--spacing-100) var(--spacing-100);
  cursor: pointer;
  font-size: 0.8125rem;
  list-style: none;
  display: flex;
}
.bcn-swo-edit__req-row::-webkit-details-marker {
  display: none;
}
.bcn-swo-edit__req-row:hover {
  background: var(--color-background-default);
}
.bcn-swo-edit__chev {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-swo-edit__req[open] > .bcn-swo-edit__req-row .bcn-swo-edit__chev {
  transform: rotate(90deg);
}
.bcn-swo-edit__code {
  font-family: var(--typography-font-family-mono);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  flex-shrink: 0;
  padding: 1px 6px;
  font-size: 0.6875rem;
  font-weight: 600;
}
.bcn-swo-edit__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swo-edit__also {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  font-size: 0.6875rem;
}
.bcn-swo-edit__also:empty {
  display: none;
}
.bcn-swo-edit__text {
  margin: 0 0 var(--spacing-200) calc(var(--spacing-100) + 20px);
  padding: var(--spacing-200) var(--spacing-300);
  border-left: 3px solid var(--color-commitment);
  background: var(--color-background-default);
  color: var(--color-content-default);
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-swo-edit__req-verbs {
  opacity: 0;
  flex-shrink: 0;
  gap: 2px;
  transition: opacity 0.12s;
  display: inline-flex;
}
.bcn-swo-edit__req-row:hover .bcn-swo-edit__req-verbs,
.bcn-swo-edit__req-row:focus-within .bcn-swo-edit__req-verbs {
  opacity: 1;
}
.bcn-swo-edit__req-verbs esa-tooltip {
  display: inline-flex;
}
.bcn-swo-edit__x {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swo-edit__x:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swo-edit__x--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swo-edit__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-swo-edit__foot--end {
  justify-content: flex-end;
}
.bcn-swo-edit__foot-left,
.bcn-swo-edit__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-action`: #d45087 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--form-label-color`: #525252 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
