export interface SubService {
  name: string;
  slug: string;
  description: string;
  heroTitle: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  applications: { icon: string; title: string; description: string }[];
  benefits: { icon: string; title: string; description: string }[];
  specs: { label: string; value: string }[];
  installationSteps: string[];
  safetyStandards: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceCategory {
  name: string;
  slug: string;
  icon: string;
  label: string;
  headline: string;
  subtext: string;
  pills: string[];
  subServices: SubService[];
}

export const BUSINESS = {
  name: "SR Invisible Grills & Safety Nets",
  tagline: "Exterior Safety Solutions",
  phone: "+91-7670984773",
  secondaryPhone: "+91-9121149915",
  whatsapp: "917670984773",
  email: "sr.securesolutions.tn@gmail.com",
  address: "34/10a, Sathya Moorthy Street, Kamaraj Nagar, Choolaimedu - 600094",
  hours: "Mon–Sat, 9AM–7PM",
  city: "Chennai",
  areas: ["Anna Nagar", "Velachery", "OMR", "T. Nagar", "Adyar", "Tambaram", "Porur", "Nungambakkam", "All of Chennai"],
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Invisible Grills",
    slug: "invisible-grills",
    icon: "Shield",
    label: "INVISIBLE GRILLS",
    headline: "See the View. Feel the Safety.",
    subtext: "Sleek stainless steel invisible grills for balconies and windows — zero obstruction, maximum protection.",
    pills: ["Balconies", "Windows", "Installation"],
    subServices: [
      {
        name: "Invisible Grills Installation",
        slug: "installation",
        description: "Professional installation of stainless steel invisible grills for apartments and villas.",
        heroTitle: "Invisible Grills Installation in Chennai",
        metaTitle: "Invisible Grills Installation in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Professional invisible grills installation in Chennai. SS 316 marine-grade cable grills for balconies and windows. 5-year warranty. Call SR Invisible Grills & Safety Nets today.",
        overview: "Invisible grills are modern safety solutions made from high-tensile stainless steel cables that provide unobstructed views while ensuring complete safety. Our installation process is designed for precision, durability, and aesthetic appeal, making them perfect for Chennai's high-rise apartments and villas.",
        applications: [
          { icon: "Building2", title: "High-Rise Apartments", description: "Safety for balconies and windows in multi-story residential buildings." },
          { icon: "Home", title: "Independent Villas", description: "Elegant protection for villa terraces and open areas." },
          { icon: "Building", title: "Commercial Spaces", description: "Safety grills for office balconies and commercial buildings." },
        ],
        benefits: [
          { icon: "Eye", title: "Unobstructed Views", description: "Crystal-clear sightlines with virtually invisible cables." },
          { icon: "Shield", title: "Maximum Safety", description: "Load-tested cables that withstand extreme force." },
          { icon: "Wind", title: "Weather Resistant", description: "Marine-grade steel resists Chennai's coastal climate." },
          { icon: "Paintbrush", title: "Aesthetic Appeal", description: "Sleek modern look that enhances property value." },
          { icon: "Wrench", title: "Low Maintenance", description: "No painting, no rusting — built to last." },
          { icon: "Clock", title: "Quick Installation", description: "Most installations completed within a single day." },
        ],
        specs: [
          { label: "Material", value: "SS 316 Marine Grade" },
          { label: "Wire Diameter", value: "2.0 mm" },
          { label: "Load Capacity", value: "250 kg per cable" },
          { label: "Weather Rating", value: "Coastal Grade" },
          { label: "Finish", value: "Mirror / Satin" },
          { label: "Warranty", value: "10 Years" },
          { label: "Standards", value: "BIS Certified" },
        ],
        installationSteps: ["Site Survey & Measurement", "Custom Frame Fabrication", "Cable Threading & Tensioning", "Quality Check & Handover"],
        safetyStandards: ["BIS IS 6248 compliant cable tensioning", "Load-tested to 250 kg per cable", "UV-resistant components for outdoor durability", "Child-safe spacing (max 25mm gap)"],
        faqs: [
          { question: "Are invisible grills safe for children?", answer: "Absolutely. Our grills have a maximum gap of 25mm between cables, making them completely child-safe. Each cable is load-tested to 250 kg." },
          { question: "Will invisible grills block my view?", answer: "No — that's the whole point. The 2mm stainless steel cables are virtually invisible from a distance, giving you unobstructed views of the skyline." },
          { question: "How long does installation take?", answer: "Most standard installations are completed within 4–6 hours. Larger projects may take up to a full day." },
          { question: "Do invisible grills rust in Chennai's climate?", answer: "No. We use SS 316 marine-grade stainless steel, specifically chosen for coastal environments like Chennai." },
        ],
      },
      {
        name: "Invisible Grills for Balconies",
        slug: "balconies",
        description: "Transparent cable grills for high-rise balconies with panoramic city views.",
        heroTitle: "Invisible Grills for Balconies in Chennai",
        metaTitle: "Invisible Grills for Balconies in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Premium invisible grills for balconies in Chennai. Enjoy unobstructed views with SS 316 marine-grade safety grills. Free site visit. Call SR Invisible Grills & Safety Nets.",
        overview: "Balcony invisible grills are the ideal solution for Chennai's growing number of high-rise apartments. They provide complete safety for children and pets while maintaining the open, airy feel of your balcony with unobstructed panoramic views of the city.",
        applications: [
          { icon: "Building2", title: "High-Rise Balconies", description: "Perfect for apartments above the 3rd floor." },
          { icon: "Baby", title: "Child Safety", description: "Keep children safe while they enjoy outdoor spaces." },
          { icon: "Dog", title: "Pet Protection", description: "Prevent pets from falling or escaping through balconies." },
        ],
        benefits: [
          { icon: "Eye", title: "Panoramic Views", description: "Enjoy your city skyline without visual barriers." },
          { icon: "Shield", title: "Fall Prevention", description: "Tested safety cables prevent accidental falls." },
          { icon: "Wind", title: "Ventilation Friendly", description: "Full airflow — no stuffy enclosed balconies." },
          { icon: "Paintbrush", title: "Modern Aesthetics", description: "Clean lines that complement any architecture." },
          { icon: "Wrench", title: "Zero Maintenance", description: "No painting or polishing required, ever." },
          { icon: "IndianRupee", title: "Cost Effective", description: "More affordable than traditional glass railings." },
        ],
        specs: [
          { label: "Material", value: "SS 316 Marine Grade" },
          { label: "Wire Diameter", value: "2.0 mm" },
          { label: "Cable Spacing", value: "25 mm max" },
          { label: "Load Capacity", value: "250 kg per cable" },
          { label: "Frame", value: "Aluminum / SS" },
          { label: "Warranty", value: "10 Years" },
        ],
        installationSteps: ["Free Site Visit", "Custom Measurement", "Frame & Cable Installation", "Tensioning & Handover"],
        safetyStandards: ["Child-safe 25mm gap spacing", "250 kg load-tested cables", "UV and salt-spray resistant", "Non-corrosive hardware"],
        faqs: [
          { question: "Can invisible grills be installed on all balcony types?", answer: "Yes — we install on concrete, glass-railing, and metal-railing balconies. Our team customizes the frame for any configuration." },
          { question: "Are they pet-safe?", answer: "Yes. The tight cable spacing prevents even small pets from slipping through or getting stuck." },
          { question: "Do they affect resale value?", answer: "They actually increase property value by adding a modern safety feature that buyers appreciate." },
          { question: "Can I remove them later?", answer: "Yes. Our installation is non-destructive and can be removed cleanly without damaging the balcony structure." },
        ],
      },
      {
        name: "Invisible Grills for Windows",
        slug: "windows",
        description: "Stainless steel cable grills for windows — safety without blocking light or air.",
        heroTitle: "Invisible Grills for Windows in Chennai",
        metaTitle: "Invisible Grills for Windows in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Invisible grills for windows in Chennai apartments. SS 316 stainless steel cables for child safety and burglar prevention. Call SR Invisible Grills & Safety Nets for free quote.",
        overview: "Window invisible grills provide essential safety for homes with children while allowing full ventilation and natural light. Unlike traditional iron grills, they don't create a caged appearance and seamlessly blend with modern window designs.",
        applications: [
          { icon: "LayoutGrid", title: "Casement Windows", description: "Fits all standard casement and sliding windows." },
          { icon: "Baby", title: "Children's Rooms", description: "Essential safety for bedrooms and play areas." },
          { icon: "Lock", title: "Burglar Deterrent", description: "High-tensile cables resist cutting attempts." },
        ],
        benefits: [
          { icon: "Sun", title: "Natural Light", description: "No visual obstruction to incoming sunlight." },
          { icon: "Wind", title: "Full Ventilation", description: "Open windows fully with complete safety." },
          { icon: "Shield", title: "Intrusion Resistant", description: "Cables cannot be cut with standard tools." },
          { icon: "Paintbrush", title: "Clean Look", description: "No rusty iron bars — ever." },
          { icon: "Ruler", title: "Custom Fit", description: "Made-to-measure for every window." },
          { icon: "Clock", title: "Fast Install", description: "Completed in 2–3 hours per window." },
        ],
        specs: [
          { label: "Material", value: "SS 316 Marine Grade" },
          { label: "Wire Diameter", value: "2.0 mm" },
          { label: "Cable Spacing", value: "25 mm" },
          { label: "Finish", value: "Powder Coated Frame" },
          { label: "Compliance", value: "BIS Certified" },
          { label: "Warranty", value: "10 Years" },
        ],
        installationSteps: ["Window Assessment", "Frame Fabrication", "Cable Installation", "Quality Inspection"],
        safetyStandards: ["BIS IS 6248 cable standard", "Anti-cut high-tensile grade", "Child-proof 25mm spacing", "Corrosion-resistant finish"],
        faqs: [
          { question: "Will it block my window from opening?", answer: "No. The grills are installed on the outer frame, allowing your windows to open and close freely." },
          { question: "Are they visible from outside?", answer: "From a distance of a few meters, the cables are practically invisible. They blend seamlessly with the window." },
          { question: "Can burglars cut through them?", answer: "The SS 316 high-tensile cables are extremely difficult to cut with ordinary tools, providing excellent intrusion resistance." },
          { question: "What about maintenance?", answer: "Zero maintenance. Just wipe with a damp cloth occasionally. No painting or anti-rust treatment needed." },
        ],
      },
    ],
  },
  {
    name: "Safety Nets",
    slug: "safety-nets",
    icon: "ShieldCheck",
    label: "SAFETY NETS",
    headline: "Your Child's Safety. Our Priority.",
    subtext: "Certified safety nets for balconies, ducts, and open gaps — keeping families safe across Chennai.",
    pills: ["Child Safe", "Pigeon Nets", "Monkey Nets", "Duct Nets"],
    subServices: [
      {
        name: "Child Safe Balcony Nets",
        slug: "child-safe-balcony",
        description: "Dense nylon safety nets for balconies — keeping children safe at height.",
        heroTitle: "Child Safe Balcony Nets in Chennai",
        metaTitle: "Child Safe Balcony Nets in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Child safe balcony nets in Chennai. High-density nylon safety nets for apartments. Protect your children from balcony falls. Call SR Invisible Grills & Safety Nets.",
        overview: "Child safe balcony nets are high-density nylon or HDPE mesh nets specifically designed to prevent children from falling through balcony openings. They are an essential safety feature for families living in high-rise apartments across Chennai.",
        applications: [
          { icon: "Baby", title: "Toddler Safety", description: "Prevent accidental falls for young children." },
          { icon: "Building2", title: "Apartment Balconies", description: "Fits all standard balcony configurations." },
          { icon: "Dog", title: "Pet Safety", description: "Keeps small pets safe on balconies." },
        ],
        benefits: [
          { icon: "Shield", title: "Fall Prevention", description: "Dense mesh prevents any gap large enough for a child." },
          { icon: "Eye", title: "Transparent", description: "Does not block views or ventilation." },
          { icon: "Sun", title: "UV Resistant", description: "Treated to withstand harsh sunlight." },
          { icon: "Droplets", title: "Water Proof", description: "Quick-drying material for monsoon seasons." },
          { icon: "Wrench", title: "Easy Install", description: "Non-invasive installation with minimal drilling." },
          { icon: "Clock", title: "Long Lasting", description: "5+ year lifespan with proper maintenance." },
        ],
        specs: [
          { label: "Material", value: "HDPE / Nylon" },
          { label: "Mesh Size", value: "25 mm × 25 mm" },
          { label: "Thread Diameter", value: "2.5 mm" },
          { label: "Load Capacity", value: "150 kg/sqm" },
          { label: "UV Treatment", value: "Yes" },
          { label: "Warranty", value: "5 Years" },
        ],
        installationSteps: ["Balcony Measurement", "Net Customization", "Hook & Frame Setup", "Net Fixing & Tensioning"],
        safetyStandards: ["ASTM F1346 child safety compliant", "UV-stabilized HDPE material", "Load-tested mesh strength", "Fire-retardant treatment"],
        faqs: [
          { question: "Is the net strong enough to hold a child's weight?", answer: "Yes. Our nets are load-tested to 150 kg per square meter — far more than enough to safely catch and hold a child." },
          { question: "Will the net degrade in sunlight?", answer: "No. Our HDPE nets are UV-stabilized and designed to last 5+ years in direct sunlight without losing strength." },
          { question: "Can I remove the net when not needed?", answer: "Yes. The installation uses hooks and frames that allow easy removal and re-installation." },
          { question: "Is it safe for newborns?", answer: "The 25mm mesh size is safe for children of all ages, including infants. No body part can pass through." },
        ],
      },
      {
        name: "Pigeon Nets",
        slug: "pigeon-nets",
        description: "Fine mesh nets to deter pigeons from balconies and building facades.",
        heroTitle: "Pigeon Nets in Chennai",
        metaTitle: "Pigeon Nets in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Pigeon nets installation in Chennai. Keep birds away from your balcony and home. Durable HDPE bird nets with professional installation. Call SR Invisible Grills & Safety Nets.",
        overview: "Pigeon nets are fine-mesh HDPE nets designed to prevent pigeons and other birds from entering balconies, terraces, and building facades. They protect your home from bird droppings, nesting debris, and health hazards associated with pigeon infestations.",
        applications: [
          { icon: "Building2", title: "Apartment Balconies", description: "Keep pigeons off your balcony." },
          { icon: "Home", title: "Terraces & Rooftops", description: "Protect open terrace areas from birds." },
          { icon: "Warehouse", title: "Commercial Buildings", description: "Large-scale bird netting for offices." },
        ],
        benefits: [
          { icon: "Bird", title: "Bird Deterrent", description: "Effectively blocks pigeons and other birds." },
          { icon: "Heart", title: "Hygiene", description: "Prevents droppings and nesting bacteria." },
          { icon: "Eye", title: "Nearly Invisible", description: "Fine mesh barely visible from distance." },
          { icon: "Wind", title: "Air & Light", description: "Full ventilation and sunlight passage." },
          { icon: "Wrench", title: "Easy Maintenance", description: "Wash with water occasionally." },
          { icon: "IndianRupee", title: "Affordable", description: "Cost-effective solution for bird problems." },
        ],
        specs: [
          { label: "Material", value: "HDPE" },
          { label: "Mesh Size", value: "30 mm × 30 mm" },
          { label: "Thread Diameter", value: "1.5 mm" },
          { label: "UV Treatment", value: "Yes" },
          { label: "Color", value: "Transparent / White" },
          { label: "Warranty", value: "5 Years" },
        ],
        installationSteps: ["Area Assessment", "Net Measurement", "Frame & Hook Installation", "Net Fitting & Securing"],
        safetyStandards: ["Non-toxic HDPE material", "UV-stabilized for outdoor use", "Bird-safe mesh — no harm to birds", "Fire-retardant grade"],
        faqs: [
          { question: "Will the net harm pigeons?", answer: "No. The net simply blocks entry — it does not trap or harm birds in any way. It's a humane bird deterrent." },
          { question: "How long do pigeon nets last?", answer: "With UV treatment, our nets last 3–5 years. In covered areas, they can last even longer." },
          { question: "Can I still use my balcony normally?", answer: "Absolutely. The net is installed around the perimeter, leaving your balcony fully accessible." },
          { question: "Do you install for entire building facades?", answer: "Yes. We handle large-scale installations for apartment complexes and commercial buildings." },
        ],
      },
      {
        name: "Monkey Nets",
        slug: "monkey-nets",
        description: "Heavy-duty knotted nets for protecting open building gaps from monkey intrusion.",
        heroTitle: "Monkey Nets in Chennai",
        metaTitle: "Monkey Nets in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Monkey nets in Chennai. Heavy-duty knotted safety nets to protect homes from monkey intrusion. Professional installation. Call SR Invisible Grills & Safety Nets.",
        overview: "Monkey nets are heavy-duty knotted nets made from thick nylon or HDPE ropes, designed to block monkeys from entering open building areas. Essential for homes and buildings in areas with monkey activity in Chennai.",
        applications: [
          { icon: "Building2", title: "Open Corridors", description: "Block monkey access through open walkways." },
          { icon: "Home", title: "Terraces", description: "Protect rooftop areas from monkey intrusion." },
          { icon: "LayoutGrid", title: "Large Openings", description: "Cover stairwell and ventilation gaps." },
        ],
        benefits: [
          { icon: "Shield", title: "Heavy Duty", description: "Thick knotted ropes resist tearing." },
          { icon: "Wind", title: "Ventilation", description: "Open mesh allows airflow." },
          { icon: "Sun", title: "Weather Proof", description: "Resistant to sun, rain, and wind." },
          { icon: "Wrench", title: "Durable", description: "5+ year lifespan." },
          { icon: "Lock", title: "Secure Fix", description: "Bolted frame prevents displacement." },
          { icon: "Clock", title: "Quick Install", description: "Same-day installation available." },
        ],
        specs: [
          { label: "Material", value: "Braided Nylon / HDPE" },
          { label: "Mesh Size", value: "40 mm × 40 mm" },
          { label: "Rope Diameter", value: "3.0 mm" },
          { label: "Load Capacity", value: "200 kg/sqm" },
          { label: "UV Treatment", value: "Yes" },
          { label: "Warranty", value: "5 Years" },
        ],
        installationSteps: ["Site Inspection", "Gap Measurement", "Frame Welding", "Net Installation & Bolting"],
        safetyStandards: ["High-tensile braided construction", "UV and weather resistant", "Non-toxic materials", "Humane animal deterrent"],
        faqs: [
          { question: "Can monkeys tear through the net?", answer: "Our heavy-duty knotted nets are made from thick braided nylon rated at 200 kg/sqm. Monkeys cannot tear through them." },
          { question: "Is it humane?", answer: "Yes — the net simply blocks entry without trapping or harming animals." },
          { question: "How is the net secured?", answer: "We use bolted steel frames around the perimeter of the opening, ensuring the net cannot be displaced." },
          { question: "Do you cover large gaps?", answer: "Yes. We can cover openings of any size, including full stairwells and building corridors." },
        ],
      },
      {
        name: "Duct Area Nets",
        slug: "duct-area",
        description: "Safety nets for internal building duct shafts — preventing falls and debris.",
        heroTitle: "Duct Area Safety Nets in Chennai",
        metaTitle: "Duct Area Safety Nets in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Duct area safety nets in Chennai. Prevent falls and debris in building duct shafts. Professional HDPE net installation. Call SR Invisible Grills & Safety Nets.",
        overview: "Duct area nets are installed across internal building shafts to prevent accidental falls, block debris, and deter birds and animals from entering through vertical duct openings. They're essential for residential complexes in Chennai.",
        applications: [
          { icon: "Building2", title: "Utility Shafts", description: "Cover plumbing and electrical duct areas." },
          { icon: "Wind", title: "Ventilation Ducts", description: "Safety nets for air shaft openings." },
          { icon: "LayoutGrid", title: "Light Wells", description: "Protect open light well areas between floors." },
        ],
        benefits: [
          { icon: "Shield", title: "Fall Prevention", description: "Prevents objects and people from falling." },
          { icon: "Bird", title: "Pest Control", description: "Blocks birds and animals from nesting." },
          { icon: "Wind", title: "Air Flow", description: "Maintains ventilation through the duct." },
          { icon: "Wrench", title: "Easy Access", description: "Removable panels for maintenance." },
          { icon: "IndianRupee", title: "Affordable", description: "Cost-effective safety solution." },
          { icon: "Clock", title: "Quick Setup", description: "Installed in 2–3 hours per duct." },
        ],
        specs: [
          { label: "Material", value: "HDPE / Nylon" },
          { label: "Mesh Size", value: "30 mm × 30 mm" },
          { label: "Thread Diameter", value: "2.0 mm" },
          { label: "UV Treatment", value: "Yes" },
          { label: "Fire Rating", value: "Retardant" },
          { label: "Warranty", value: "5 Years" },
        ],
        installationSteps: ["Duct Inspection", "Opening Measurement", "Frame Installation", "Net Fixing"],
        safetyStandards: ["Fall prevention compliant", "Fire-retardant material", "Pest-proof mesh density", "Load-tested for safety"],
        faqs: [
          { question: "Can the net support a person's weight?", answer: "The net is designed as a safety barrier to prevent falls. While it can support significant weight, it should not be used as a walking surface." },
          { question: "Will it block duct ventilation?", answer: "No. The mesh is designed to allow full airflow while blocking objects, birds, and animals." },
          { question: "How is it maintained?", answer: "Our nets include removable access panels so building maintenance can be carried out without removing the entire net." },
          { question: "Is it fire-safe?", answer: "Yes. We use fire-retardant treated materials suitable for building duct installations." },
        ],
      },
    ],
  },
  {
    name: "Ceiling Cloth Drying Hangers",
    slug: "ceiling-hangers",
    icon: "Shirt",
    label: "CEILING CLOTH HANGERS",
    headline: "Smart Drying. Zero Floor Space.",
    subtext: "Space-saving ceiling-mounted cloth drying systems — designed for modern Chennai apartments.",
    pills: ["Pulley System", "Ceiling Mount", "Easy Install"],
    subServices: [
      {
        name: "Ceiling Cloth Drying Hangers Installation",
        slug: "installation",
        description: "Ceiling-mounted pulley drying rack systems for modern apartments.",
        heroTitle: "Ceiling Cloth Drying Hangers in Chennai",
        metaTitle: "Ceiling Cloth Drying Hangers in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Ceiling cloth drying hangers in Chennai. Space-saving pulley system for modern apartments. Professional installation. Call SR Invisible Grills & Safety Nets for free quote.",
        overview: "Ceiling cloth drying hangers are space-saving drying systems mounted directly to your ceiling. Using a simple pulley mechanism, clothes can be raised and lowered effortlessly. Perfect for Chennai apartments where balcony space is limited.",
        applications: [
          { icon: "Home", title: "Apartments", description: "Ideal for compact apartment utility areas." },
          { icon: "Building2", title: "Utility Rooms", description: "Maximize utility room space." },
          { icon: "Sun", title: "Balcony Drying", description: "Overhead drying on covered balconies." },
        ],
        benefits: [
          { icon: "Maximize2", title: "Space Saving", description: "No floor space occupied — everything at ceiling level." },
          { icon: "Wind", title: "Better Airflow", description: "Hot air rises — clothes dry faster at ceiling height." },
          { icon: "Wrench", title: "Easy Operation", description: "Simple pulley system — raise and lower with one hand." },
          { icon: "IndianRupee", title: "Affordable", description: "Costs less than standalone drying racks." },
          { icon: "Ruler", title: "Custom Lengths", description: "Available in 4ft, 6ft, and 8ft rod lengths." },
          { icon: "Clock", title: "Quick Install", description: "Installed in under 2 hours." },
        ],
        specs: [
          { label: "Material", value: "Stainless Steel Rods" },
          { label: "Rod Lengths", value: "4ft / 6ft / 8ft" },
          { label: "Number of Rods", value: "6 Rods Standard" },
          { label: "Weight Capacity", value: "25 kg per rod" },
          { label: "Pulley Type", value: "Nylon Coated" },
          { label: "Warranty", value: "2 Years" },
        ],
        installationSteps: ["Ceiling Assessment", "Bracket Mounting", "Pulley & Rod Setup", "Testing & Handover"],
        safetyStandards: ["Ceiling anchor tested for load", "Rust-proof stainless steel", "Nylon-coated pulleys for smooth operation", "Child-safe rope cleat lock"],
        faqs: [
          { question: "How much weight can each rod hold?", answer: "Each stainless steel rod can hold up to 25 kg of wet clothes. The standard 6-rod system supports up to 150 kg total." },
          { question: "Will it damage my ceiling?", answer: "We use precision ceiling anchors that create minimal holes. The system is designed for concrete ceilings common in Chennai apartments." },
          { question: "Can I adjust the height?", answer: "Yes. The pulley system lets you lower the rods to hanging height and raise them back to the ceiling when loaded." },
          { question: "Is it suitable for heavy items like blankets?", answer: "Yes. The 25 kg per rod capacity easily handles heavy items like blankets, bedsheets, and jeans." },
        ],
      },
    ],
  },
  {
    name: "Sports Nets",
    slug: "sports-nets",
    icon: "Trophy",
    label: "SPORTS NETS",
    headline: "Play Hard. Train Safe. Every Day.",
    subtext: "Professional-grade sports nets for cricket, football, and all practice sessions — installed on terraces and open grounds across Chennai.",
    pills: ["Practice Nets", "Terrace Cricket"],
    subServices: [
      {
        name: "All Sports Practice Nets",
        slug: "practice-nets",
        description: "Multi-sport net enclosures for outdoor grounds and sports halls.",
        heroTitle: "Sports Practice Nets in Chennai",
        metaTitle: "Sports Practice Nets in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Sports practice nets in Chennai. Professional-grade multi-sport net enclosures for grounds and terraces. Installation by SR Invisible Grills & Safety Nets. Call now.",
        overview: "Our sports practice nets are professional-grade enclosures designed for cricket, football, badminton, and multi-sport practice. Built with heavy-duty HDPE netting and galvanized steel frames, they're installed on open grounds, terraces, and sports facilities across Chennai.",
        applications: [
          { icon: "Trophy", title: "Cricket Practice", description: "Full batting and bowling practice nets." },
          { icon: "CircleDot", title: "Football Training", description: "Goal nets and boundary enclosures." },
          { icon: "LayoutGrid", title: "Multi-Sport", description: "Configurable nets for any sport." },
        ],
        benefits: [
          { icon: "Shield", title: "Heavy Duty", description: "Industrial-grade netting for daily use." },
          { icon: "Sun", title: "All Weather", description: "UV-treated for outdoor installation." },
          { icon: "Ruler", title: "Custom Size", description: "Built to your exact dimensions." },
          { icon: "Wrench", title: "Easy Maintain", description: "Wash-and-go netting material." },
          { icon: "Building2", title: "Any Location", description: "Grounds, terraces, or indoor halls." },
          { icon: "Clock", title: "Fast Setup", description: "Installed within 1–2 days." },
        ],
        specs: [
          { label: "Material", value: "HDPE / Nylon" },
          { label: "Mesh Size", value: "40 mm × 40 mm" },
          { label: "Thread Diameter", value: "3.0 mm" },
          { label: "Frame", value: "Galvanized Steel" },
          { label: "UV Treatment", value: "Yes" },
          { label: "Warranty", value: "3 Years" },
        ],
        installationSteps: ["Site Survey", "Frame Design", "Steel Frame Erection", "Net Installation"],
        safetyStandards: ["Sports-grade HDPE netting", "Galvanized steel corrosion resistance", "Wind-rated frame design", "Impact-tested mesh strength"],
        faqs: [
          { question: "Can you install on a rooftop terrace?", answer: "Yes. We specialize in terrace installations with lightweight galvanized frames designed for rooftop load limits." },
          { question: "What sports can it be used for?", answer: "Cricket, football, badminton, tennis, volleyball — our nets are multi-sport compatible." },
          { question: "How often should nets be replaced?", answer: "With UV treatment and proper care, our sports nets last 3–5 years of daily use." },
          { question: "Do you provide custom sizes?", answer: "Yes. Every installation is custom-measured and fabricated to your exact space requirements." },
        ],
      },
      {
        name: "Terrace Cricket Nets",
        slug: "terrace-cricket",
        description: "Cricket net batting cages for rooftop terraces.",
        heroTitle: "Terrace Cricket Nets in Chennai",
        metaTitle: "Terrace Cricket Nets in Chennai | SR Invisible Grills & Safety Nets",
        metaDescription: "Terrace cricket nets in Chennai. Professional batting cage setup on your rooftop. Heavy-duty HDPE nets with steel frames. Call SR Invisible Grills & Safety Nets.",
        overview: "Terrace cricket nets transform your building rooftop into a personal cricket practice arena. Our installations include full batting cage enclosures with heavy-duty HDPE nets and galvanized steel frames, designed to withstand daily cricket ball impact.",
        applications: [
          { icon: "Trophy", title: "Batting Practice", description: "Full-length batting cage for practice." },
          { icon: "CircleDot", title: "Bowling Practice", description: "Enclosed bowling run-up lanes." },
          { icon: "Building2", title: "Rooftop Arenas", description: "Convert any terrace into a cricket ground." },
        ],
        benefits: [
          { icon: "Shield", title: "Impact Resistant", description: "Withstands leather ball impact." },
          { icon: "Building2", title: "Terrace Ready", description: "Designed for rooftop load limits." },
          { icon: "Ruler", title: "Full Length", description: "Standard 22-yard pitch length." },
          { icon: "Sun", title: "UV Resistant", description: "Outdoor-rated for Chennai sun." },
          { icon: "Wrench", title: "Low Maintenance", description: "Durable netting requires no upkeep." },
          { icon: "Clock", title: "2-Day Install", description: "Complete setup within 48 hours." },
        ],
        specs: [
          { label: "Material", value: "HDPE Heavy Duty" },
          { label: "Mesh Size", value: "40 mm × 40 mm" },
          { label: "Thread Diameter", value: "3.5 mm" },
          { label: "Frame", value: "Galvanized Steel" },
          { label: "Standard Size", value: "22 yards × 12 ft" },
          { label: "Warranty", value: "3 Years" },
        ],
        installationSteps: ["Terrace Assessment", "Frame Design & Fabrication", "Steel Frame Erection", "Cricket Net Installation"],
        safetyStandards: ["Cricket ball impact rated", "Galvanized anti-rust frame", "Wind-load tested", "Terrace weight compliance"],
        faqs: [
          { question: "Will it damage my terrace?", answer: "No. We use non-invasive base plates and counterweights that don't require drilling into the terrace floor." },
          { question: "Can it handle leather ball impact?", answer: "Yes. Our 3.5mm HDPE nets are specifically rated for leather cricket ball impact at full speed." },
          { question: "What's the standard size?", answer: "Our standard terrace cricket net is 22 yards long and 12 feet high, but we customize to any size." },
          { question: "Is it safe for the building structure?", answer: "Yes. We assess terrace load capacity before installation and use lightweight galvanized steel that stays within safe limits." },
        ],
      },
    ],
  },
];

export function getServiceBySlug(categorySlug: string, serviceSlug: string): { category: ServiceCategory; service: SubService } | null {
  const category = serviceCategories.find((c) => c.slug === categorySlug);
  if (!category) return null;
  const service = category.subServices.find((s) => s.slug === serviceSlug);
  if (!service) return null;
  return { category, service };
}

export function getAllServices(): { category: ServiceCategory; service: SubService }[] {
  return serviceCategories.flatMap((c) => c.subServices.map((s) => ({ category: c, service: s })));
}
