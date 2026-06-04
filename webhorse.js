
// --- GAME STATE ---
let players = [];
let bets = [];
const INITIAL_BALANCE = 100;
const nameBank = [
  "Chunk of Gold", "Final Gambit", "Journalism", "Flying Mohawk", "Big Truck", "Sinister Minister", "Secretariat",
  "His Eminence", "Exterminator", "Mr. Big News", "Lucky Debonair", "Orb", "Mine That Bird", "Big Brown",
  "Charismatic", "Ferdinand", "Tim Tam", "Omaha", "Broker Tip", "Twenty Grand", "Gallant Fox",
  "Behave Yourself", "Regret", "Typhoon II", "Sovereignty", "Justify", "California Chrome",
  "I'll Have Another", "Street Sense", "Smarty Jones", "Real Quiet", "Winning Colors", "Shut Out",
  "Hoop Jr.", "Middleground","Ponder","Citation", "Forward Pass", "Viva La Vida", "Tiffanie", "Neigh",
  "The von Rosentiel", "Horse", "Donkey", "Dominique", "Beth Friend", "Obama", "JorJor Well", "Bob Dylan",
  "iPad", "Subway Surf", "Apple Store", "Fudge", "Refrigerator", "Joe Mama", "Magnet", "Whiskey",
  "Britney Spears", "Bow Ling", "Shaboingboing", "Waymo Smith"
  ]
  
const jockeys = [
  "Junior Alvarado", "Brian Joseph Hernandez Jr.", "Javier Castellano", "Sonny Leon", "Florent Geroux", 
  "John Velazquez", "Flavien Prat", "Mike Smith", "John Velazquez", "Mario Gutierrez", "Victor Espinoza",
  "Joel Rosario", "Mario Gutierrez", "John Velazquez", "Calvin Borel", "Kent Desormeaux",
  "Edgar Prado", "Mike Smith", "Stewart Elliott", "Jose Santos", "Victor Espinoza",
  "Jorge Chavez", "Kent Desormeaux", "Chris Antley", "Kent Desormeaux", "Gary Stevens",
  "Jerry Bailey", "Gary Stevens", "Chris McCarron", "Jerry Bailey", "Pat Day",
  "Chris Antley","Craig Perret","Pat Valenzuela","Gary Stevens","Chris McCarron",
  "Bill Shoemaker","Angel Cordero Jr.","Laffit Pincay Jr.","Eddie Delahoussay",
  "Jorge Velasquez", "Jacinto Vasquez", "Katherine Coffin", "Chicken Jockey"
];

const TOP_ODDS_DISTRIBUTION = {
  "bin_centers": [
    0.7469999999999999,
    1.041,
    1.335,
    1.6289999999999998,
    1.9229999999999998,
    2.2169999999999996,
    2.511,
    2.8049999999999997,
    3.099,
    3.393,
    3.6870000000000003,
    3.981,
    4.2749999999999995,
    4.568999999999999,
    4.8629999999999995,
    5.157,
    5.450999999999999,
    5.744999999999999,
    6.039,
    6.332999999999999,
    6.626999999999999,
    6.920999999999999,
    7.215,
    7.508999999999999,
    7.802999999999999,
    8.097,
    8.391,
    8.684999999999999,
    8.979,
    9.273,
    9.567,
    9.860999999999999,
    10.155,
    10.448999999999998,
    10.742999999999999,
    11.036999999999999,
    11.331,
    11.625,
    11.918999999999999,
    12.213,
    12.506999999999998,
    12.800999999999998,
    13.094999999999999,
    13.389,
    13.683,
    13.976999999999999,
    14.270999999999999,
    14.564999999999998,
    14.858999999999998,
    15.152999999999999,
    15.447,
    15.741,
    16.034999999999997,
    16.329,
    16.622999999999998,
    16.917,
    17.211,
    17.505000000000003,
    17.799,
    18.093000000000004,
    18.387,
    18.680999999999997,
    18.975,
    19.269,
    19.563000000000002,
    19.857,
    20.151000000000003,
    20.445,
    20.738999999999997,
    21.033,
    21.326999999999998,
    21.621000000000002,
    21.915,
    22.209000000000003,
    22.503,
    22.796999999999997,
    23.091,
    23.384999999999998,
    23.679000000000002,
    23.973,
    24.267000000000003,
    24.561,
    24.854999999999997,
    25.149,
    25.442999999999998,
    25.737000000000002,
    26.031,
    26.325000000000003,
    26.619,
    26.912999999999997,
    27.207,
    27.500999999999998,
    27.795,
    28.089,
    28.383000000000003,
    28.677,
    28.970999999999997,
    29.265,
    29.558999999999997,
    29.853
  ],
  "cdf": [
    0.013513513513513514,
    0.013513513513513514,
    0.013513513513513514,
    0.013513513513513514,
    0.02702702702702703,
    0.02702702702702703,
    0.06756756756756757,
    0.06756756756756757,
    0.13513513513513517,
    0.14864864864864868,
    0.14864864864864868,
    0.1756756756756757,
    0.1756756756756757,
    0.20270270270270274,
    0.29729729729729737,
    0.29729729729729737,
    0.29729729729729737,
    0.29729729729729737,
    0.3648648648648649,
    0.3648648648648649,
    0.3648648648648649,
    0.3648648648648649,
    0.3648648648648649,
    0.3648648648648649,
    0.3648648648648649,
    0.5270270270270271,
    0.5270270270270271,
    0.5270270270270271,
    0.5270270270270271,
    0.5270270270270271,
    0.5270270270270271,
    0.6621621621621622,
    0.6621621621621622,
    0.6621621621621622,
    0.6621621621621622,
    0.6621621621621622,
    0.6621621621621622,
    0.6621621621621622,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.8108108108108109,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9324324324324325,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    0.9864864864864865,
    1.0
  ],
  "min_odds": 0.6,
  "max_odds": 30.0,
  "mean_odds": 9.237837837837839,
  "median_odds": 8.0


}
// --- REAL KENTUCKY DERBY ODDS DISTRIBUTION ---
const MIDDLE_ODDS_DISTRIBUTION = {

  "bin_centers": [
    12.190000000000001,
    12.57,
    12.95,
    13.33,
    13.71,
    14.09,
    14.47,
    14.85,
    15.23,
    15.61,
    15.99,
    16.37,
    16.75,
    17.130000000000003,
    17.509999999999998,
    17.89,
    18.27,
    18.65,
    19.03,
    19.41,
    19.79,
    20.17,
    20.55,
    20.93,
    21.310000000000002,
    21.69,
    22.07,
    22.45,
    22.83,
    23.21,
    23.59,
    23.97,
    24.35,
    24.73,
    25.11,
    25.490000000000002,
    25.87,
    26.25,
    26.63,
    27.009999999999998,
    27.39,
    27.77,
    28.15,
    28.53,
    28.91,
    29.29,
    29.67,
    30.05,
    30.43,
    30.810000000000002,
    31.189999999999998,
    31.57,
    31.950000000000003,
    32.33,
    32.709999999999994,
    33.09,
    33.47,
    33.849999999999994,
    34.230000000000004,
    34.61,
    34.989999999999995,
    35.370000000000005,
    35.75,
    36.129999999999995,
    36.510000000000005,
    36.89,
    37.269999999999996,
    37.650000000000006,
    38.03,
    38.41,
    38.790000000000006,
    39.17,
    39.55,
    39.93000000000001,
    40.31,
    40.69,
    41.07,
    41.45,
    41.83,
    42.209999999999994,
    42.59,
    42.97,
    43.349999999999994,
    43.730000000000004,
    44.11,
    44.489999999999995,
    44.870000000000005,
    45.25,
    45.629999999999995,
    46.010000000000005,
    46.39,
    46.769999999999996,
    47.150000000000006,
    47.53,
    47.91,
    48.290000000000006,
    48.67,
    49.05,
    49.43,
    49.81
  ],
  "cdf": [
    0.039473684210526314,
    0.039473684210526314,
    0.039473684210526314,
    0.039473684210526314,
    0.039473684210526314,
    0.039473684210526314,
    0.039473684210526314,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.19736842105263158,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.631578947368421,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    0.9473684210526315,
    1.0
  ],
  "min_odds": 12.0,
  "max_odds": 50.0,
  "mean_odds": 23.63157894736842,
  "median_odds": 20.0
}
const BOTTOM_ODDS = {
    'morning lines':[30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 50.0, 30.0, 30.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 20.0, 30.0, 30.0, 30.0, 50.0, 50.0, 30.0, 30.0, 30.0, 30.0, 50.0, 50.0, 50.0, 30.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 30.0, 30.0, 30.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 30.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 50.0, 50.0, 50.0, 50.0, 50.0]
}
setupCheckboxes();

// --- CHECKBOX RADIO BEHAVIOR ---
// Set up event listeners after DOM loads
document.addEventListener('DOMContentLoaded', function() {
            setupCheckboxes();
        });

        function setupCheckboxes() {
            const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            
            allCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        const positionClass = this.classList[0]; // 'first-place', 'second-place', or 'third-place'
                        const horseNum = this.dataset.horse; // Which horse (1, 2, or 3)
                        
                        // Uncheck all other checkboxes with the same position (same column)
                        document.querySelectorAll(`.${positionClass}`).forEach(cb => {
                            if (cb !== this) {
                                cb.checked = false;
                            }
                        });
                        
                        // Uncheck all other checkboxes for the same horse (same row)
                        document.querySelectorAll(`[data-horse="${horseNum}"]`).forEach(cb => {
                            if (cb !== this) {
                                cb.checked = false;
                            }
                        });
                    }
                });
            });
        }
        
      
function toFractional(numeric) {
    if (!Number.isFinite(numeric)) return "—";
    const capped = Math.min(100, Math.max(0.2, numeric));
    if (capped < 1) return "Evens";
    const table = [
        { max: 0.9, odds: "3-5" },
        { max: 1.0, odds: "1-1" },
        { max: 1.5, odds: "6-5" },
        { max: 2.0, odds: "2-1" },
        { max: 2.5, odds: "5-2" },
        { max: 3.0, odds: "3-1" },
        { max: 4.0, odds: "4-1" },
        { max: 5.0, odds: "5-1" },
        { max: 6.0, odds: "6-1" },
        { max: 7.0, odds: "7-2" },
        { max: 8.0, odds: "8-1" },
        { max: 9.0, odds: "9-2" },
        { max: 10.0, odds: "10-1" },
        { max: 13.0, odds: "12-1" },
        { max: 17.0, odds: "15-1" },
        { max: 20.0, odds: "20-1" },
        { max: 30.0, odds: "30-1" },
        { max: 50.0, odds: "50-1" },
    ];
    for (const row of table) {
        if (capped <= row.max) return row.odds;
    }
    return "99-1+";
}


class OddSample { //initalize rhe class
  constructor(cdfdist){
    this.bins = cdfdist.bin_centers; //pull out bin centers or the odds
    this.cdf = cdfdist.cdf; //and also the cdf which is the probablity
  }
  sample() { //sample the prob and then 
    const rand = Math.random(); //pull out a random number between 0-1
    const idx = this.cdf.findIndex(p => rand <= p); //find that in cdf and find bin
    return this.bins[idx !== -1 ? idx : this.bins.length - 1]; //safety measure
  }
}

// Create samplers for each tier
const topOddsSampler = new OddSample(TOP_ODDS_DISTRIBUTION);
const middleOddsSampler = new OddSample(MIDDLE_ODDS_DISTRIBUTION);

function updateOddsDisplay() {
    const oddsCells = document.querySelectorAll('.sTdRaceMorningLineInformation');
    const totalHorses = oddsCells.length;

    if (totalHorses < 3) return;

    // Create an array representing which sampler to use
    let samplerAssignment = ['top', 'top', 'middle'];

    // Shuffle the array so assignment is random
    for (let i = samplerAssignment.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [samplerAssignment[i], samplerAssignment[j]] = [samplerAssignment[j], samplerAssignment[i]];
    }

    const converter = new OddsToSpeedConverter();

    oddsCells.forEach((cell, index) => {
        let numericOdds;
        if (samplerAssignment[index] === 'top') {
            numericOdds = topOddsSampler.sample();
        } else {
            numericOdds = middleOddsSampler.sample();
        }

        // Convert numeric odds to Beyer figure and Arduino speed
        const { beyer, speed } = converter.oddsToSpeed(numericOdds);

        // Store numeric odds and speed for later use
        cell.dataset.numericOdds = numericOdds;
        cell.dataset.beyer = beyer;
        cell.dataset.speed = speed;

        // Optionally, still show fractional odds
        const fractionalOdds = toFractional(numericOdds);
        cell.textContent = fractionalOdds;
    });
}


function randomizeRaceRunners() {
    // updateing horse names
    const runnerSpans = document.querySelectorAll('.sLabelRunner');
    runnerSpans.forEach(span => {
        span.textContent = getRandomHorseName();
    });

    //updating jockey names
    const jockeyCells = document.querySelectorAll('.sTdRaceRunnerJockeyInformation + td');
    jockeyCells.forEach(cell => {
        cell.textContent = getRandomJockey();
    });

    // also updating the odds
    updateOddsDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    setupCheckboxes();
    updateRunnerNames();
    updateJockeyNames();
    updateOddsDisplay(); // updates the odds
    updatePlayerDropdown();
});


// --- PLAYER MANAGEMENT ---
function addPlayer() {
    const nameInput = document.getElementById('newPlayerName');
    const name = nameInput.value.trim();

    if (name === "") return alert("Please enter a name");

    // Check duplicate
    if (players.find(p => p.name === name)) return alert("Player already exists");

    const newPlayer = {
        id: Date.now(),
        name: name,
        balance: INITIAL_BALANCE
    };

    players.push(newPlayer);
    updatePlayerDropdown();
    nameInput.value = "";
}
function updatePlayerDropdown() {
    const select = document.getElementById('activePlayerSelect');
    const balanceSpan = document.getElementById('currentBalance');

    // Store the currently selected value before clearing
    const currentValue = select.value;
    
    select.innerHTML = ''; // Clear existing options
    select.innerHTML = '<option value="">-- Select Bettor --</option>'; // Default option

    players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.id;
        option.textContent = `${player.name} ($${player.balance.toFixed(2)})`;
        select.appendChild(option);
    });

    // Re-select the player if they still exist, or select the first player
    if (players.length > 0) {
        let newSelection = currentValue;
        if (!players.find(p => p.id == currentValue)) {
            newSelection = players[0].id;
        }
        select.value = newSelection;
    } else {
        select.value = '';
    }

    // Manually trigger balance update after setting the new select value
    updateBalanceDisplay();
}

function getRandomHorseName() {
    const index = Math.floor(Math.random() * nameBank.length);
    return nameBank[index];
}

function getRandomJockey() {
    const index = Math.floor(Math.random() * jockeys.length);
    return jockeys[index];
}

function assignUniqueNames(elements, namePool) {
    let availableNames = [...namePool]; 

    elements.forEach(element => {
        const randomIndex = Math.floor(Math.random() * availableNames.length);
        const uniqueName = availableNames[randomIndex];
        
        element.textContent = uniqueName;
        availableNames.splice(randomIndex, 1);
    });
}


function updateRunnerNames() {
    const runnerSpans = document.querySelectorAll('.sLabelRunner');
    assignUniqueNames(runnerSpans, nameBank);
}
function updateJockeyNames() {
    const jockeyCells = document.querySelectorAll('.sTdRaceRunnerJockeyInformation + td');
    assignUniqueNames(jockeyCells, jockeys);
}
document.addEventListener('DOMContentLoaded', () => {
    setupCheckboxes();
    updateRunnerNames();
    updateJockeyNames();
});

function randomizeRaceRunners() {
    // Update horse names
    const runnerSpans = document.querySelectorAll('.sLabelRunner');
    runnerSpans.forEach(span => {
        span.textContent = getRandomHorseName();
    });

    // Update jockey names (the cell AFTER runner name)
    const jockeyCells = document.querySelectorAll('.sTdRaceRunnerJockeyInformation + td');
    jockeyCells.forEach(cell => {
        cell.textContent = getRandomJockey();
    });
}

//lets work on getting those odds to work offline

class OddsToSpeedConverter {
  constructor() {
    //stats that i made in python
    this.BEYER_MEAN = 92;      
    this.BEYER_STD = 9;       
    this.BEYER_MIN = 47;       
    this.BEYER_MAX = 110;     
    
    this.SPEED_MIN = 2000;      // FIX MEEE
    this.SPEED_MAX = 6000;    
    
    this.CORRELATION = -0.55; 
  }
  
  //convert morning line odds into beyer figure
  oddsToBeyerFigure(numericOdds) {
    //normalize these odds
    const oddsNormalized = Math.log(numericOdds + 1) / Math.log(51);
    
    //then apply the correlation between odds and beyer fig
    const beyerNormalized = 1 - (oddsNormalized * Math.abs(this.CORRELATION));
    
    //this is adding some randomness
    const randomFactor = (Math.random() - 0.5) * 0.3;
    const finalNormalized = Math.max(0, Math.min(1, beyerNormalized + randomFactor));
    
    //convert to actual Beyer figure
    const beyer = this.BEYER_MIN + (finalNormalized * (this.BEYER_MAX - this.BEYER_MIN));
    
    return Math.round(beyer);
  }
  
  //convert to a arduino speed... FIX ME SHOULD BE DONE IN THE IDE
  beyerToArduinoSpeed(beyerFigure) {
    // Normalize Beyer to 0-1 range
    const normalized = (beyerFigure - this.BEYER_MIN) / (this.BEYER_MAX - this.BEYER_MIN);
    
    // Map to Arduino speed range
    const speed = this.SPEED_MIN + (normalized * (this.SPEED_MAX - this.SPEED_MIN));
    
    return Math.round(speed);
  }
  //direct conversion
  oddsToSpeed(numericOdds) {
    const beyer = this.oddsToBeyerFigure(numericOdds);
    const speed = this.beyerToArduinoSpeed(beyer);
    
    return {
      odds: numericOdds,
      beyer: beyer,
      speed: speed
    };
  }
  
  //generates the speeds for all horses in a race
  generateRaceSpeeds(horsesWithOdds) {
    return horsesWithOdds.map(horse => {
      const conversion = this.oddsToSpeed(horse.numericOdds);
      return {
        ...horse,
        beyer: conversion.beyer,
        speed: conversion.speed
      };
    });
  }
  
  //Get speed as bytes for Arduino serial communication

  getSpeedBytes(horsesWithSpeeds) {
    const speedBytes = horsesWithSpeeds.map(h => h.speed);
    console.log('🐴 Speed Bytes Generated:', speedBytes);
    return speedBytes;
  }
}



function triggerArduinoRace() {

    if (bets.length === 0) {
        if (!confirm("No bets placed! Start race anyway?")) return;
    }

    randomizeRaceRunners();

    alert("Signal sent to Arduino! The race is starting...");
}


// Listener for dropdown change
document.getElementById('activePlayerSelect').addEventListener('change', updateBalanceDisplay);

function updateBalanceDisplay() {
    const select = document.getElementById('activePlayerSelect');
    const player = players.find(p => p.id == select.value);
    const balanceSpan = document.getElementById('currentBalance');

    if (player) {
        balanceSpan.innerText = player.balance;
    } else {
        balanceSpan.innerText = "0";
    }
}

// --- BETTING LOGIC ---
function placeBet() {

    const select = document.getElementById('activePlayerSelect');
    if (!select.value) return alert("Please add a player first.");

    const playerIndex = players.findIndex(p => p.id == select.value);
    const player = players[playerIndex];

    // Get trifecta selections
    const firstPlace = document.querySelector('.first-place:checked');
    const secondPlace = document.querySelector('.second-place:checked');
    const thirdPlace = document.querySelector('.third-place:checked');

    if (!firstPlace || !secondPlace || !thirdPlace) {
        return alert("Please select horses for 1st, 2nd, and 3rd place.");
    }

    const horse1 = firstPlace.dataset.horse;
    const horse2 = secondPlace.dataset.horse;
    const horse3 = thirdPlace.dataset.horse;

    // Check for duplicates
    if (horse1 === horse2 || horse1 === horse3 || horse2 === horse3) {
        return alert("You cannot pick the same horse for multiple positions!");
    }

    // Get wager amount
    const wagerInput = document.getElementById('wager-amount');
    const amount = parseFloat(wagerInput.value);

    if (!amount || amount <= 0) return alert("Please enter a valid wager amount.");
    if (amount > player.balance) return alert("Insufficient funds.");

    // Deduct balance
    players[playerIndex].balance -= amount;

    // Get horse names
    const horseName1 = document.querySelectorAll('.sLabelRunner')[horse1-1].innerText;
    const horseName2 = document.querySelectorAll('.sLabelRunner')[horse2-1].innerText;
    const horseName3 = document.querySelectorAll('.sLabelRunner')[horse3-1].innerText;

    bets.push({
        player: player.name,
        trifecta: {
            first: { num: horse1, name: horseName1 },
            second: { num: horse2, name: horseName2 },
            third: { num: horse3, name: horseName3 }
        },
        amount: amount
    });

    // Update UI
    updateBalanceDisplay();
    renderBetLog();

    // Reset Inputs
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    wagerInput.value = "";
}

function renderBetLog() {
    const logContainer = document.getElementById('bet-log');
    logContainer.innerHTML = "";

    if (bets.length === 0) {
        logContainer.innerHTML = '<div style="color: #888; text-align: center;">No bets placed yet.</div>';
        return;
    }

    bets.forEach(bet => {
        const div = document.createElement('div');
        div.className = 'log-entry';
        div.innerHTML = `
            <span>
                <span style="color:#ffcc00">${bet.player}</span> - 
                Trifecta: #${bet.trifecta.first.num}-#${bet.trifecta.second.num}-#${bet.trifecta.third.num}
            </span>
            <span>$${bet.amount}</span>
        `;
        logContainer.appendChild(div);
    });
}

// --- ARDUINO COMMUNICATION ---
function triggerArduinoRace() {
  
    if (bets.length === 0) {
        if(!confirm("No bets placed! Start race anyway?")) return;
    }

    alert("Signal sent to Arduino! The race is starting...");

    // Optional: Test with random results
    // setTimeout(() => { handleWinner(1, 2, 3); }, 3000);
}

// Call this when Arduino sends back the race results
function handleWinner(first, second, third) {
    let resultsMsg = `Race Results:\n1st: Horse #${first}\n2nd: Horse #${second}\n3rd: Horse #${third}\n\n`;

    bets.forEach(bet => {
        const t = bet.trifecta;
        if (t.first.num == first && t.second.num == second && t.third.num == third) {
            // Exact trifecta - big payout (10x)
            const winnings = bet.amount * 10;
            const player = players.find(p => p.name === bet.player);
            player.balance += winnings;
            resultsMsg += `🏆 ${bet.player} won $${winnings} (Exact Trifecta!)!\n`;
        } else if (
            (t.first.num == first || t.second.num == first || t.third.num == first) &&
            (t.first.num == second || t.second.num == second || t.third.num == second) &&
            (t.first.num == third || t.second.num == third || t.third.num == third)
        ) {
            // Box trifecta (right horses, wrong order) - smaller payout (3x)
            const winnings = bet.amount * 3;
            const player = players.find(p => p.name === bet.player);
            player.balance += winnings;
            resultsMsg += `${bet.player} won $${winnings} (Box Trifecta)\n`;
        }
    });

    alert(resultsMsg);
    bets = []; // Clear bets for next race
    renderBetLog();
    updateBalanceDisplay();
    setupCheckboxes();
    updateRunnerNames();
    updateJockeyNames();
}
