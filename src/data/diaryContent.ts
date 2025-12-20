export interface MonthData {
  month: string;
  season: 'winter' | 'spring' | 'summer' | 'fall';
  memories: string[];
  story: string;
  photoPlaceholders: number;
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
    story: "The year began with the softest snowfall, as if the universe was wrapping us in a blanket of white. We spent New Year's Eve watching the city lights sparkle, your hand warm in mine. Those cold January nights became our favorite — we'd bundle up, make hot chocolate, and dream about all the adventures ahead. Every frozen morning felt magical because I woke up next to you.",
    photoPlaceholders: 3
  },
  {
    month: "February",
    season: "winter",
    memories: [
      "Valentine's candlelit dinner",
      "Heart-shaped pancakes",
      "Love letters exchanged"
    ],
    story: "February brought Valentine's Day, but honestly, every day with you feels like Valentine's Day. You surprised me with handwritten love letters — old-fashioned and romantic, just like us. We cooked together, laughed at our failed heart-shaped pancakes, and slow-danced in the kitchen. The snow kept falling outside, but inside, we were warm and wonderfully in love.",
    photoPlaceholders: 2
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
    photoPlaceholders: 3
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
    photoPlaceholders: 3
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
    photoPlaceholders: 2
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
    photoPlaceholders: 3
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
    photoPlaceholders: 3
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
    photoPlaceholders: 2
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
    photoPlaceholders: 3
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
    photoPlaceholders: 3
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
    photoPlaceholders: 2
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
    photoPlaceholders: 3
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
