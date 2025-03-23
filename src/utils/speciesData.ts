
export interface Species {
  id: string;
  name: string;
  scientificName: string;
  category: 'snake' | 'spider' | 'insect' | 'mammal' | 'bird' | 'other';
  dangerLevel: 'harmless' | 'caution' | 'dangerous' | 'lethal';
  description: string;
  habitat: string;
  imageUrl: string;
  safetyTips: string[];
  firstAid?: string[];
  emergencyAdvice?: string;
}

const speciesData: Species[] = [
  {
    id: 'dugite',
    name: 'Dugite',
    scientificName: 'Pseudonaja affinis',
    category: 'snake',
    dangerLevel: 'lethal',
    description: 'A venomous snake native to Western Australia, typically olive to brown in color with a cream or yellow belly.',
    habitat: 'Found in a variety of habitats including coastal dunes, heathland, and suburban areas around Perth.',
    imageUrl: 'https://www.dpaw.wa.gov.au/images/plants-animals/animals/living-with-wildlife/snakes_and_lizards/190307%20Dugite%205.jpg',
    safetyTips: [
      'Keep a safe distance',
      'Do not attempt to catch or kill the snake',
      'If encountered, back away slowly and allow it to move away'
    ],
    firstAid: [
      'Apply pressure-immobilization bandage',
      'Keep the bitten area still and below heart level',
      'Call 000 immediately',
      'Do not wash the bite area (venom can help identify the snake)',
      'Do not apply a tourniquet or cut the wound'
    ],
    emergencyAdvice: 'Seek immediate medical attention. Call 000. Dugite venom is potentially life-threatening.'
  },
  {
    id: 'redback',
    name: 'Redback Spider',
    scientificName: 'Latrodectus hasselti',
    category: 'spider',
    dangerLevel: 'dangerous',
    description: 'A small black spider with a distinctive red stripe on its back. Females are larger and more venomous than males.',
    habitat: 'Often found in dry, sheltered areas like garden sheds, mailboxes, and under outdoor furniture around Perth suburbs.',
    imageUrl: 'https://www.perthnow.com.au/news/offbeat/redback-spider-in-toilet-at-perth-home-c-6645681',
    safetyTips: [
      'Check shoes and gloves before putting them on',
      'Wear gloves when gardening or cleaning outdoor areas',
      'Shake out clothing, towels, and bedding that have been left outside'
    ],
    firstAid: [
      'Apply a cold pack to reduce pain',
      'Seek medical attention promptly',
      'Monitor for severe symptoms like sweating, nausea, or vomiting'
    ],
    emergencyAdvice: 'Seek medical attention if bitten. Antivenom may be required for severe reactions.'
  },
  {
    id: 'bobtail',
    name: 'Bobtail (Shingleback)',
    scientificName: 'Tiliqua rugosa',
    category: 'other',
    dangerLevel: 'harmless',
    description: 'A short-tailed, blue-tongued lizard common in Western Australia. They have a distinctive stumpy tail that resembles their head.',
    habitat: 'Found in a variety of habitats including woodlands, shrublands, and suburban gardens across the Perth region.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tiliqua_rugosa_00.jpg/800px-Tiliqua_rugosa_00.jpg',
    safetyTips: [
      'Observe from a distance',
      'Do not attempt to pick up or handle',
      'Bobtails are protected species in Western Australia'
    ]
  },
  {
    id: 'tiger-snake',
    name: 'Tiger Snake',
    scientificName: 'Notechis scutatus',
    category: 'snake',
    dangerLevel: 'lethal',
    description: 'A highly venomous snake with distinctive dark bands. Color can vary from yellowish to black.',
    habitat: 'Prefers wetlands and waterways, but can be found in suburban areas around Perth, particularly near water sources.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Notechis_scutatus_scutatus.JPG',
    safetyTips: [
      'Keep a safe distance',
      'Do not attempt to catch or kill the snake',
      'Be especially cautious near wetlands and watercourses'
    ],
    firstAid: [
      'Apply pressure-immobilization bandage',
      'Keep the bitten area still and below heart level',
      'Call 000 immediately',
      'Do not wash the bite area (venom can help identify the snake)',
      'Do not apply a tourniquet or cut the wound'
    ],
    emergencyAdvice: 'Seek immediate medical attention. Call 000. Tiger snake venom is potentially life-threatening.'
  },
  {
    id: 'huntsman',
    name: 'Huntsman Spider',
    scientificName: 'Heteropoda spp.',
    category: 'spider',
    dangerLevel: 'caution',
    description: 'A large, fast-moving spider with a flat body and long legs. Despite their intimidating appearance, they are not considered dangerous.',
    habitat: 'Often found indoors in Perth homes, particularly on walls and ceilings. Also found under bark and in vegetation outdoors.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Huntsman-spider.jpg',
    safetyTips: [
      'Though frightening in appearance, they are generally not aggressive',
      'Can be safely captured and released outside using a container',
      'Help control pest insects in and around the home'
    ]
  }
];

export default speciesData;

export const getSpeciesByName = (name: string): Species | undefined => {
  return speciesData.find(species => 
    species.name.toLowerCase() === name.toLowerCase() ||
    species.scientificName.toLowerCase() === name.toLowerCase()
  );
};

export const getDangerLevelColor = (level: Species['dangerLevel']): string => {
  switch(level) {
    case 'harmless':
      return 'bg-nature-500 text-white';
    case 'caution':
      return 'bg-amber-500 text-white';
    case 'dangerous':
      return 'bg-orange-500 text-white';
    case 'lethal':
      return 'bg-danger-500 text-white';
    default:
      return 'bg-neutral-500 text-white';
  }
};
