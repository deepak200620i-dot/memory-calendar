export interface MonthData {
  month: string;
  season: 'winter' | 'spring' | 'summer' | 'fall';
  memories: string[];
  story: string;
  photos: string[]; // Array of image paths - replace with your own photos!
}

export const diaryContent: MonthData[] = [
  {
    month: "January",
    season: "winter",
    memories: [
      "Our first snow together",
      "Cozy nights with hot cocoa",
      "New Year's kiss at midnight"
    ],
    story: "January a month where everything begins a new. Shayad hamra liya ek new journey ka start tha, may be a chance to forget the past leave the future and create beautiful memories together. Doesn't matter how much success we achieved in that but acha toh bhaut rha aur hona b chaiye.Ab jis cheez ki shuraat apka sath hui ho wo toh hamesha hi special rhi hai.Aur vasa b saal ke starting mai apse milna usse acha toh aur kya hi ho sakta tha. Achi cheezo ki Kharab baate bhi hoti hi hai...aur vo ya ki sbse jada yaad bhi vo hi aati hai.Ab jb saal ke end mai hai toh saal ka pehla din yaad aata hai...Bhaut jaldi nikl gya sb kuch asa lagta abhi toh January thi, Thoda din phele hi toh apse mila tha...pr nii...vo 365 din purani baat ho gyi...aur ab naya saal shayad nayi umeedein nayi khawaishein bhi....I hope January phir se ek chance de phir ek nayi shurat ek nayi journey. I hope January wha se shuru na kre jaha December ne shoda tha...And I pray January tumhme phir se Khush kra,tumhe phir se khush rehna ki ek new reason de aur bhaut bhaut sari khushiyan le kr aaye apka liya...",
    photos: [
      "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "February",
    season: "winter",
    memories: [
      "Valentine's candlelit dinner",
      "Heart-shaped pancakes",
      "Love letters exchanged"
    ],
    story: "February logo ke according toh the month of love...hota b hoga shayad...may be logo ko kisi specific month mai pyaar hota hoga...Pr mujhe kya mujhe konsa kisi se payaar hona lga mera liya toh Februray is the month of cochlates aur koi ek adha rose mil jai toh month of roses bhi ho jata hai...pura February toh mai bs isliya school jata rha kyuki subha-subha ap miljata tha ...subha subha thnd aur us thand mai school uniform mai apko dekhna...Kher ab vo Februray dobara ni aatii...ab vo kismat rhi niii...",
        photos: [
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "March",
    season: "spring",
    memories: [
      "First flowers blooming",
      "Rainy day movie marathons",
      "Planning spring adventures"
    ],
    story: "Spring finally whispered through March, bringing gentle rains and the first brave flowers. We spent rainy afternoons wrapped in blankets, watching old movies and stealing kisses during the boring parts. As the days grew longer, so did our list of dreams — places to visit, things to try, moments to create together.",
    photos: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1462275646964-a0e3571f4f9f?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1489440076332-5ec1a74b773c?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "April",
    season: "spring",
    memories: [
      "Cherry blossoms picnic",
      "Surprise birthday celebration",
      "Dancing in the spring rain"
    ],
    story: "April showered us with cherry blossoms and spontaneous adventures. We had picnics under blooming trees, petals falling around us like confetti. One afternoon, we got caught in a sudden downpour and instead of running for cover, we danced. You twirled me around, both of us laughing, completely soaked and completely happy.",
    photos: [
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1462275646964-a0e3571f4f9f?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "May",
    season: "spring",
    memories: [
      "Garden planting together",
      "Sunrise hiking adventures",
      "Mother's Day family gathering"
    ],
    story: "May arrived with longer days and adventures calling our names. We started a little garden together — you chose the sunflowers, I picked the herbs. Early morning hikes became our ritual, chasing sunrises and collecting wildflowers. Watching things grow reminded me of us — how we nurture each other, how we bloom together.",
    photos: [
      "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "June",
    season: "summer",
    memories: [
      "Beach road trip",
      "Stargazing until dawn",
      "Summer solstice bonfire"
    ],
    story: "Summer burst through June with golden warmth and endless possibilities. We took our first road trip to the coast, windows down, our favorite songs playing loud. Nights were spent stargazing, you naming constellations while I just watched you. The summer solstice bonfire marked the beginning of our warmest memories yet.",
    photos: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "July",
    season: "summer",
    memories: [
      "Fireworks and cotton candy",
      "Lake house weekend",
      "Hammock naps and lemonade"
    ],
    story: "July painted everything in shades of gold and blue. Fireworks lit up the sky as we sat side by side, your head on my shoulder. Our lake house weekend was pure magic — morning swims, afternoon naps in the hammock, evenings cooking over an open fire. Time slowed down, and I realized these simple moments are my favorite kind of extraordinary.",
    photos: [
      "https://images.unsplash.com/photo-1498931299210-de6f5d72e1c9?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "August",
    season: "summer",
    memories: [
      "Concert under the stars",
      "Farmers market mornings",
      "Sunset boat ride"
    ],
    story: "August was our month of adventures. We danced at an outdoor concert, surrounded by music and fairy lights. Saturday mornings became about farmers markets — picking fresh fruits, tasting homemade treats, holding hands through crowded lanes. That sunset boat ride, with the sky turning pink and orange, felt like a scene from a movie — except it was our beautiful reality.",
    photos: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "September",
    season: "fall",
    memories: [
      "Apple orchard adventures",
      "Cozy sweater weather begins",
      "Anniversary celebrations"
    ],
    story: "September brought the first whispers of autumn, and with it, a new kind of magic. Apple orchards became our weekend escape — you always picked the highest ones, showing off. We celebrated our anniversary with a quiet dinner, looking back at all we'd built together. As leaves started to turn, I fell deeper in love with you and this life we're creating.",
    photos: [
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "October",
    season: "fall",
    memories: [
      "Pumpkin patch adventures",
      "Halloween costume planning",
      "Leaf pile jumping"
    ],
    story: "October wrapped us in amber and gold. Pumpkin patches, hayrides, and endless debates about our Halloween costumes filled our days. You insisted on matching costumes — I secretly loved that you did. Jumping into leaf piles like kids, carving pumpkins by candlelight, watching spooky movies until midnight — fall became our season of playfulness.",
    photos: [
      "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "November",
    season: "fall",
    memories: [
      "Thanksgiving gratitude",
      "First frost morning walks",
      "Baking experiments together"
    ],
    story: "November taught us gratitude in the most beautiful ways. Frosty mornings made our walks magical, our breath visible in the cold air. We hosted our first Thanksgiving together — the turkey was slightly burnt, but the love was perfectly done. Baking became our new hobby, flour fights included. I'm thankful for every messy, wonderful moment with you.",
    photos: [
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=200&h=200&fit=crop"
    ]
  },
  {
    month: "December",
    season: "winter",
    memories: [
      "Holiday lights tour",
      "Gift wrapping chaos",
      "New Year's Eve magic"
    ],
    story: "December closed our year with twinkling lights and grateful hearts. We drove around looking at Christmas decorations, hot cocoa in hand. Gift wrapping sessions turned chaotic and hilarious. As the year drew to a close, I looked at you and realized — every moment, every season, every single day has been a gift. Here's to another year of us, my love.",
    photos: [
      "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1479722842840-c0a823bd0cd6?w=200&h=200&fit=crop"
    ]
  }
];

export const getSeasonClass = (season: MonthData['season']) => {
  switch (season) {
    case 'winter': return 'season-winter';
    case 'spring': return 'season-spring';
    case 'summer': return 'season-summer';
    case 'fall': return 'season-fall';
  }
};
