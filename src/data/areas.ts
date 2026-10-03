export type Area = { slug: string; name: string; county: string; place: string; intro: string; paragraphs: string[]; calls: string[]; nearby: string[]; title: string; faqs: {question: string; answer: string}[]; sources: {label: string; url: string}[]; };
export const areas: Area[] = [
  {
    "intro": "Hydro jetting in Tallmadge, Ohio needs a sewer-district check before a cleaning plan. The city has two sanitary sewer districts and also identifies properties with septic systems.",
    "paragraphs": [
      "Tallmadge's 2017 Comprehensive Plan describes a housing mix dominated by detached homes and notes that newer homes are generally larger than older ones. Its figures describe the plan period, not a current housing count. Ask about additions and replaced pipe rather than inferring material from the house's age.",
      "The city lists District I as city-maintained and District II as county-owned and operated. A city utility bill alone does not settle who maintains the public sewer, because Tallmadge also bills connected District II residents. Give the full address when reporting a possible public-main problem.",
      "The city also publishes septic guidance. Summit County Public Health requires site and soil evaluation for new or replacement onsite systems and issues installation and alteration permits. A pipe blockage and a treatment-area problem need different assessments; cleaning cannot change soil absorption.",
      "Tallmadge explains that rain and melted snow become runoff and that storm drains discharge untreated to waterways. A house sewer, street catch basin and driveway culvert are different systems. Record whether the problem follows rainfall, indoor fixture use or both."
    ],
    "faqs": [
      {
        "question": "Who should I call about a public sewer backup in Tallmadge?",
        "answer": "District I public sewers are city-maintained; District II public sewers are county-operated. The right utility contact depends on the address."
      },
      {
        "question": "Does my Tallmadge utility bill tell me who maintains the sewer?",
        "answer": "Not by itself. Tallmadge also bills connected District II residents even though the county operates that system."
      },
      {
        "question": "Is my Tallmadge home on public sewer or septic?",
        "answer": "Check your property records or ask the utility about your address. Tallmadge has both sanitary sewer districts and properties with septic systems, so a city address alone does not settle the connection."
      },
      {
        "question": "Who should I contact if my Tallmadge septic system needs replacing?",
        "answer": "For a Summit County property, Summit County Public Health handles site and soil evaluation and installation or alteration permits. Confirm the exact parcel jurisdiction."
      },
      {
        "question": "Does a rain-linked backup always need jetting?",
        "answer": "No. Outside runoff, a private blockage and a public-system problem can need different responses."
      },
      {
        "question": "Can wastewater be diverted into a storm drain?",
        "answer": "No. Tallmadge explains that storm drains discharge runoff untreated. A sanitary blockage should not be diverted into that system."
      }
    ],
    "sources": [
      {
        "label": "Tallmadge 2017 housing plan",
        "url": "https://www.tallmadgeoh.gov/DocumentCenter/View/1336/Tallmadge-Comprehensive-Plan-2017-Update"
      },
      {
        "label": "Tallmadge sewer districts and septic guidance",
        "url": "https://tallmadgeoh.gov/723/Sewer-Services"
      },
      {
        "label": "Tallmadge runoff guidance",
        "url": "https://tallmadgeoh.gov/292/Storm-Water-Management"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "tallmadge",
    "name": "Tallmadge",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "cuyahoga-falls",
      "stow",
      "munroe-falls"
    ],
    "calls": [
      "Why does the Tallmadge sewer district matter?",
      "Can the city bill identify the operator?",
      "Is every Tallmadge home on sanitary sewer?"
    ],
    "title": "Two sewer districts, different responsibilities"
  },
  {
    "intro": "Hydro jetting in Cuyahoga Falls, Ohio should include a clean-water connection check, not only drain buildup. The city has a stormwater inspection program for inflow and infiltration entering sanitary sewers.",
    "paragraphs": [
      "The city's downtown historic guidance recognizes nineteenth- and twentieth-century development. Historic commercial buildings and houses can have different access constraints, but their setting does not prove the age of the drain below them.",
      "The city stormwater program identifies improper connections and clean-water sources entering sanitary sewers on private property. Buyers and sellers must sign a stormwater inspection disclosure when a house is sold. A previous report can be useful evidence when investigating repeat wet-weather symptoms.",
      "The city says identified code violations must be repaired within 180 days after inspection. Jetting does not correct an improper connection. A cleaned pipe still has the wrong configuration if runoff enters where it should not.",
      "Describe rainfall or snowmelt timing and whether the issue is indoors or outside. A clogged branch, a sanitary lateral and stormwater inflow are different questions. Onsite system replacement in county health jurisdiction separately requires site and soil evaluation; a city name is not a soil diagnosis."
    ],
    "faqs": [
      {
        "question": "Could a stormwater connection be causing my Cuyahoga Falls backup?",
        "answer": "It identifies clean-water inflow, infiltration and improper sanitary connections on private property."
      },
      {
        "question": "Should I check the stormwater report when buying a Cuyahoga Falls home?",
        "answer": "The city says both buyer and seller must sign the stormwater inspection disclosure."
      },
      {
        "question": "Can jetting fix an improper connection?",
        "answer": "No. Cleaning and correcting the connection are separate tasks."
      },
      {
        "question": "What happens after a violation is identified?",
        "answer": "The city inspection page states that violations must be repaired within 180 days after inspection."
      },
      {
        "question": "Does a historic building have original sewer pipe?",
        "answer": "Not necessarily. Historic development evidence does not establish each private drain material."
      },
      {
        "question": "What should I send about a rain-linked backup?",
        "answer": "Provide the address, affected fixtures, rainfall timing and any city inspection or disclosure record."
      }
    ],
    "sources": [
      {
        "label": "Cuyahoga Falls stormwater inspection",
        "url": "https://www.cityofcf.com/services/stormwater-inspection"
      },
      {
        "label": "Cuyahoga Falls historic guidance",
        "url": "https://www.cityofcf.com/laws/downtown-historic-design-guidelines"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "cuyahoga-falls",
    "name": "Cuyahoga Falls",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "stow",
      "munroe-falls",
      "tallmadge"
    ],
    "calls": [
      "What is the city stormwater inspection for?",
      "Is there a disclosure when a house is sold?",
      "Can jetting fix an improper connection?"
    ],
    "title": "Clean-water connections and repeat backups"
  },
  {
    "intro": "Hydro jetting in Stow, Ohio should account for older subdivisions as well as later housing. The city plan documents a range of home ages, while Summit County provides sanitary sewer service.",
    "paragraphs": [
      "Stow's comprehensive plan reports that half its housing units in the study period were built before 1980. This is dated planning evidence, not a description of every street today. Renovation records and a camera provide better evidence of the drain now in place.",
      "The city names Summit County Department of Sanitary Sewer Services as the sanitary provider. Stow's water department is a different contact. Distinguish a water-supply complaint from wastewater that cannot leave a building.",
      "In a detached home, identify the private cleanout and changed plumbing from additions. In a multi-unit building, confirm which units share the affected section. A kitchen branch that slows during dishwashing and a lowest-level fixture that backs up during several fixtures' use need different access checks.",
      "For onsite treatment, Summit County Public Health uses site and soil evaluation to decide what new or replacement system can fit the lot. Cleaning cannot fix a failed disposal area. Stow Building and Engineering oversee construction; check the scope if a cleaning inspection leads to replacement or excavation."
    ],
    "faqs": [
      {
        "question": "Is hydro jetting suitable for an older Stow home?",
        "answer": "It may be suitable if the line is sound. Stow's plan documents homes from different eras, so check pipe condition and repair history before selecting high-pressure cleaning."
      },
      {
        "question": "Who should I call if several Stow homes have sewer backups?",
        "answer": "The city names Summit County Department of Sanitary Sewer Services, separately from its water department."
      },
      {
        "question": "What if several homes back up together?",
        "answer": "Tell the county sanitary operator and describe the timing. A public-system issue is not automatically a private drain blockage."
      },
      {
        "question": "Does jetting solve a wet septic area?",
        "answer": "No. Site and soil performance require a separate onsite assessment."
      },
      {
        "question": "Who checks construction requirements?",
        "answer": "Stow Building and Engineering can identify requirements for a proposed repair or excavation."
      },
      {
        "question": "What should a property manager send?",
        "answer": "Include units affected, access arrangements, prior camera footage and whether symptoms follow rain or ordinary fixture use."
      }
    ],
    "sources": [
      {
        "label": "Stow housing plan",
        "url": "https://www.stowohio.gov/DocumentCenter/View/3452"
      },
      {
        "label": "Stow utility and building contacts",
        "url": "https://www.stowohio.gov/299/New-Residents"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "stow",
    "name": "Stow",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "tallmadge",
      "kent",
      "munroe-falls",
      "cuyahoga-falls"
    ],
    "calls": [
      "Why ask when a Stow house was built?",
      "Who provides Stow sanitary sewer?",
      "What if several homes back up together?"
    ],
    "title": "Housing eras and the county sewer operator"
  },
  {
    "intro": "Hydro jetting in Kent, Ohio starts with the property setup: a South End house, a licensed rental and a downtown kitchen can have different drain access and maintenance histories.",
    "paragraphs": [
      "Kent State University's South End mapping project documents railroad-worker homes using historic census records and Sanborn maps. That is useful building context, not proof that a house still has its original sewer. Identify pipe replacements and the cleanout before choosing a cleaning method.",
      "Kent licenses residential rentals through its Health and Community Development departments. In a rental, record which units and fixtures are affected and arrange access with the owner or manager. A shared building drain needs a different access plan from one kitchen branch.",
      "The city treats residential, commercial and industrial wastewater through its sanitary sewer collection system. A problem in a building drain or connecting line is not automatically a public-main blockage. If adjacent properties back up together, notify the utility as well as describing your own symptoms.",
      "For a property using onsite treatment, Portage County Health District oversees permitting and inspections and identifies soils evaluation as part of proper design. Cleaning a house drain does not restore a failed treatment tank or saturated disposal area. Confirm where the pipe discharges first."
    ],
    "faqs": [
      {
        "question": "Does my older Kent house need a camera inspection first?",
        "answer": "A camera inspection is useful when a main drain repeatedly backs up or the pipe condition is unknown. Kent's South End includes historic homes, but renovations and replacements mean house age alone cannot identify the drain material."
      },
      {
        "question": "What should I do if a drain backs up in my Kent rental?",
        "answer": "Identify the affected unit, manager and shared drain access before arranging work. Supply previous drain reports if available."
      },
      {
        "question": "Could my Kent backup involve the public sewer?",
        "answer": "The City of Kent Water Reclamation Division treats wastewater delivered through the sanitary collection system."
      },
      {
        "question": "What if my property uses septic?",
        "answer": "Confirm the connection first. Portage County Health District oversees onsite systems; pipe cleaning is not tank pumping or disposal-field repair."
      },
      {
        "question": "Can jetting repair a cracked line?",
        "answer": "No. It can remove suitable obstructions but cannot seal a crack, correct an offset or rebuild a collapsed section."
      },
      {
        "question": "What should I include in a request?",
        "answer": "Send the address, property type, affected fixtures, rental access contact if relevant, and any prior camera report."
      }
    ],
    "sources": [
      {
        "label": "Kent State South End housing research",
        "url": "https://communitygeography.kent.edu/index.php/2025/08/04/who-lived-here-mapping-kents-south-end/"
      },
      {
        "label": "Kent rental housing programs",
        "url": "https://www.kentohio.gov/living-here/housing/"
      },
      {
        "label": "Kent water reclamation",
        "url": "https://www.kentohio.gov/living-here/utilities/water-and-sewer/"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      }
    ],
    "slug": "kent",
    "name": "Kent",
    "county": "Portage",
    "place": "city",
    "nearby": [
      "stow",
      "munroe-falls",
      "mogadore",
      "tallmadge"
    ],
    "calls": [
      "Does a South End house always have old sewer pipe?",
      "Why does a Kent rental need an access plan?",
      "Who treats Kent municipal wastewater?"
    ],
    "title": "Rental access and municipal wastewater"
  },
  {
    "intro": "Hydro jetting in Mogadore, Ohio needs the full address and county because the village spans Summit and Portage counties. Confirm the wastewater connection before cleaning or discussing repairs.",
    "paragraphs": [
      "Mogadore is a village in two counties, not one countywide utility territory. The mailing address alone does not establish the sewer operator or which health district handles an onsite system. Confirm the actual parcel and connection.",
      "Collect pipe-replacement history and camera records for the building. Neighboring homes need not have the same drains after renovations. A house, rental or small business may require a different entry and cleanout plan even on one street.",
      "Summit County Public Health requires site and soil evaluation for new or replacement onsite systems in its jurisdiction. Portage County Health District also identifies soil evaluation, siting and design as essential. The parcel determines the authority; neither source supports assuming a village-wide soil type.",
      "A slow indoor fixture, wet ground near treatment equipment and runoff at a street inlet are different complaints. Identify the receiving system and timing. If inspection leads to replacement, confirm jurisdiction and alteration requirements separately from the cleaning request."
    ],
    "faqs": [
      {
        "question": "Who should I call if my Mogadore home has septic trouble?",
        "answer": "The village spans Summit and Portage counties. Jurisdiction matters for onsite treatment and permit questions."
      },
      {
        "question": "How do I find out who handles sewer service at my Mogadore home?",
        "answer": "Not reliably. Confirm the street address and actual connection."
      },
      {
        "question": "Which health district should I contact about my Mogadore septic system?",
        "answer": "Confirm the parcel; Summit and Portage health authorities publish guidance for their separate jurisdictions."
      },
      {
        "question": "Does jetting replace septic pumping?",
        "answer": "No. Pipe cleaning, pumping and disposal-area repair are different tasks."
      },
      {
        "question": "Can neighboring houses prove my pipe material?",
        "answer": "No. Replacement histories differ. Use property records and inspection evidence."
      },
      {
        "question": "What if the plan changes to replacement?",
        "answer": "Confirm the county and repair scope before checking construction or system-alteration requirements."
      }
    ],
    "sources": [
      {
        "label": "Mogadore county geography",
        "url": "https://en.wikipedia.org/wiki/Mogadore,_Ohio"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      },
      {
        "label": "Portage County onsite treatment guidance",
        "url": "https://portagehealth.net/our-programs/environmental-public-health/waste-water/"
      }
    ],
    "slug": "mogadore",
    "name": "Mogadore",
    "county": "Summit and Portage",
    "place": "village",
    "nearby": [
      "tallmadge",
      "kent",
      "munroe-falls"
    ],
    "calls": [
      "Why ask for the county in Mogadore?",
      "Does the mailing address identify my operator?",
      "Which authority handles onsite treatment?"
    ],
    "title": "Check the county before the connection"
  },
  {
    "intro": "Hydro jetting in Munroe Falls, Ohio begins by separating city water and stormwater from county-operated sanitary service. Give the address and the exact indoor fixture or outside drain affected.",
    "paragraphs": [
      "Munroe Falls lists its Water Division for public water and stormwater, while Summit County provides sanitary sewer service. Those are different systems even when charges relate to water use. A slow sink and a road catch basin retaining runoff need different investigations.",
      "For the building, collect any addition, renovation or pipe-replacement records. We do not assign a house age, lateral material or root problem from the city name. A camera report and cleanout location are useful property-specific evidence.",
      "If the lowest fixture backs up after several fixtures run, record the pattern and ask whether neighboring properties are affected. A shared sanitary complaint should reach the county operator; cleaning one private drain cannot correct all public network problems.",
      "The city Planning Commission reviews development and public or private utility proposals. If the task changes to altered utility work, identify the review scope first. Onsite treatment within county health jurisdiction requires separate site and soil evaluation for new or replacement systems; cleaning does not restore a failed disposal area."
    ],
    "faqs": [
      {
        "question": "Who handles sanitary sewer here?",
        "answer": "Summit County provides sanitary service. Munroe Falls handles public water and stormwater under its Water Division."
      },
      {
        "question": "Should I call Munroe Falls or the county about a sewer backup?",
        "answer": "No. The utility guide describes separate responsibilities."
      },
      {
        "question": "What if several properties back up together?",
        "answer": "Report the shared pattern and timing to the county sanitary operator."
      },
      {
        "question": "Is a street drain the same as a house sewer?",
        "answer": "No. Specify outside runoff versus wastewater from indoor fixtures."
      },
      {
        "question": "Who reviews changed utility development?",
        "answer": "The city Planning Commission lists public and private utilities among its responsibilities. Confirm the scope with the city."
      },
      {
        "question": "Can jetting repair a septic disposal area?",
        "answer": "No. Site and soil performance are treatment questions, not problems solved by pipe cleaning."
      }
    ],
    "sources": [
      {
        "label": "Munroe Falls utility responsibilities",
        "url": "https://munroefalls.com/1366/Utility-Services"
      },
      {
        "label": "Munroe Falls development review",
        "url": "https://munroefalls.com/176/Planning-Commission"
      },
      {
        "label": "Summit County onsite system evaluation",
        "url": "https://www.scph.org/water-quality/new-or-replacement-sewage-treatment-systems"
      }
    ],
    "slug": "munroe-falls",
    "name": "Munroe Falls",
    "county": "Summit",
    "place": "city",
    "nearby": [
      "tallmadge",
      "stow",
      "cuyahoga-falls",
      "kent"
    ],
    "calls": [
      "Who handles sanitary sewer here?",
      "Does the city water bill settle a sanitary problem?",
      "What if several properties back up together?"
    ],
    "title": "City water, county sanitary sewer"
  }
];
export const areaBySlug: Record<string, Area> = Object.fromEntries(areas.map(a => [a.slug, a]));
