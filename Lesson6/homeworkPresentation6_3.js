let data = [
    {
      price: 324,
      type: 2,
      area: 375,
      presence: true,
      name: "Aria",
      id: 41098,
    },
    {
      price: 660,
      type: 4,
      area: 451,
      presence: true,
      name: "Bayard",
      id: 48467,
    },
    {
      price: 337,
      type: 4,
      area: 525,
      presence: true,
      name: "Bellehurst",
      id: 49340,
    },
    {
      price: 343,
      type: 4,
      area: 538,
      presence: false,
      name: "Brookview",
      id: 52504,
    },
    {
      price: 423,
      type: 2,
      area: 506,
      presence: true,
      name: "Dumont Place",
      id: 41172,
    },
    {
      price: 257,
      type: 4,
      area: 379,
      presence: false,
      name: "Halstead",
      id: 49952,
    },
    {
      price: 230,
      type: 2,
      area: 468,
      presence: true,
      name: "Hillgrove",
      id: 41166,
    },
    {
      price: 183,
      type: 4,
      area: 451,
      presence: true,
      name: "Kempston Place",
      id: 48471,
    },
    {
      price: 674,
      type: 2,
      area: 522,
      presence: true,
      name: "Overlook at Queen Creek",
      id: 48470,
    },
    {
      price: 450,
      type: 2,
      area: 373,
      presence: true,
      name: "Reserve at Wildwood",
      id: 50316,
    },
    {
      price: 795,
      type: 1,
      area: 366,
      presence: true,
      name: "Reverie on Cumberland",
      id: 48465,
    },
    {
      price: 550,
      type: 4,
      area: 376,
      presence: true,
      name: "Riverside",
      id: 41080,
    },
    {
      price: 190,
      type: 1,
      area: 367,
      presence: true,
      name: "Serenade",
      id: 41168,
    },
    {
      price: 589,
      type: 4,
      area: 368,
      presence: false,
      name: "The Grove",
      id: 40912,
    },
    {
      price: 330,
      type: 2,
      area: 368,
      presence: true,
      name: "Woodwinds at New Providence",
      id: 41086,
    },
    {
      price: 299,
      type: 2,
      area: 455,
      presence: true,
      name: "Canopy at Hudson Bend",
      id: 51105,
    },
    {
      price: 263,
      type: 3,
      area: 481,
      presence: true,
      name: "Carmel",
      id: 41193,
    },
    {
      price: 169,
      type: 1,
      area: 454,
      presence: true,
      name: "Estates of Flintrock",
      id: 41060,
    },
    {
      price: 222,
      type: 1,
      area: 483,
      presence: true,
      name: "Fairview Heights",
      id: 41192,
    },
    {
      price: 385,
      type: 4,
      area: 448,
      presence: false,
      name: "Headwaters",
      id: 53168,
    },
    {
      price: 180,
      type: 2,
      area: 447,
      presence: true,
      name: "Highlands at Mayfield Ranch ",
      id: 50235,
    },
    {
      price: 570,
      type: 4,
      area: 448,
      presence: true,
      name: "Highpointe",
      id: 41154,
    },
    {
      price: 690,
      type: 3,
      area: 480,
      presence: true,
      name: "Lagos",
      id: 41198,
    },
    {
      price: 280,
      type: 3,
      area: 446,
      presence: false,
      name: "Mockingbird Park",
      id: 51381,
    },
    {
      price: 133,
      type: 1,
      area: 446,
      presence: false,
      name: "Mockingbird Park",
      id: 51381,
    },
    {
      price: 530,
      type: 1,
      area: 448,
      presence: true,
      name: "Saratoga Hills",
      id: 41019,
    },
    {
      price: 577,
      type: 4,
      area: 455,
      presence: true,
      name: "Summit at Lake Travis",
      id: 41061,
    },
    {
      price: 290,
      type: 4,
      area: 481,
      presence: false,
      name: "Vine Creek",
      id: 51382,
    },
    {
      price: 150,
      type: 1,
      area: 443,
      presence: true,
      name: "Vista Vera",
      id: 49408,
    },
    {
      price: 453,
      type: 3,
      area: 411,
      presence: true,
      name: "Lake Castleberry",
      id: 49596,
    },
  ];



const findPerfectLand = (array, minPrice, maxPrice, minsquare, maxsquare) => {

    let result = [];

    array.forEach((item) => {
      if (
        item.price >= minPrice &&
        item.price <= maxPrice &&
        item.area >= minsquare &&
        item.area <= maxsquare
      ) {
        result.push(item);
      }
    });

    result.length == 0 ? console.log(`По заданным параметрам ничего не найдено`) : console.log(result);
};
  
  findPerfectLand(data, 200, 300, 300, 500);