    var SUGGESTED_LISTING_COMM_RANGES = {
        CA: [
            {lowerPrice: 190000, upperPrice: 400000, minComm: 1.95, maxComm: 2.55},
            {lowerPrice: 400000, upperPrice: 600000, minComm: 1.7, maxComm: 2.35},
            {lowerPrice: 600000, upperPrice: 800000, minComm: 1.75, maxComm: 2.45},
            {lowerPrice: 800000, upperPrice: 1000000, minComm: 1.7, maxComm: 2.35},
            {lowerPrice: 1000000, upperPrice: 2000000, minComm: 1.65, maxComm: 2.35}
        ],
        TX: [
            {lowerPrice: 190000, upperPrice: 400000, minComm: 1.65, maxComm: 2.45},
            {lowerPrice: 400000, upperPrice: 600000, minComm: 1.55, maxComm: 2.35},
            {lowerPrice: 600000, upperPrice: 2000000, minComm: 1.5, maxComm: 2.3}
        ],
        FL: [
            {lowerPrice: 190000, upperPrice: 400000, minComm: 1.95, maxComm: 2.65},
            {lowerPrice: 400000, upperPrice: 600000, minComm: 1.85, maxComm: 2.6},
            {lowerPrice: 600000, upperPrice: 2000000, minComm: 2.0, maxComm: 2.7}
        ],
        IL: [
            {lowerPrice: 190000, upperPrice: 400000, minComm: 1.95, maxComm: 2.6},
            {lowerPrice: 400000, upperPrice: 600000, minComm: 1.95, maxComm: 2.55},
            {lowerPrice: 600000, upperPrice: 2000000, minComm: 1.8, maxComm: 2.5}
        ],
        NY: [
            {lowerPrice: 190000, upperPrice: 400000, minComm: 2.1, maxComm: 2.7},
            {lowerPrice: 400000, upperPrice: 800000, minComm: 2, maxComm: 2.55},
            {lowerPrice: 800000, upperPrice: 1000000, minComm: 1.75, maxComm: 2.4},
            {lowerPrice: 1000000, upperPrice: 2000000, minComm: 1.85, maxComm: 2.55}
        ],
        'default': [
            {lowerPrice: 190000, upperPrice: 400000, minComm: 1.95, maxComm: 2.6},
            {lowerPrice: 400000, upperPrice: 600000, minComm: 1.85, maxComm: 2.55},
            {lowerPrice: 600000, upperPrice: 800000, minComm: 1.7, maxComm: 2.45},
            {lowerPrice: 800000, upperPrice: 2000000, minComm: 1.75, maxComm: 2.45}
        ]
    };
console.log(typeof SUGGESTED_LISTING_COMM_RANGES);
console.log(SUGGESTED_LISTING_COMM_RANGES['CA']);
