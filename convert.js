const unitStrings = { "mm": [1, 0], "cm": [1, 1], "dm": [1, 2], "m": [1, 3], "km": [1, 4], "g": [2, 5], "kg": [2, 6], "t": [2, 7] };
const units = { 0: [1], 1: [10], 2: [10], 3: [10], 4: [1000], 5: [1], 6: [1000], 7: [1000] };

var converted, toConvert, fromUnit, toUnit;
if (process.argv.length != 6) {
  stop()
} else {
  toConvert = process.argv[2];
  fromUnit = process.argv[3];
  to = process.argv[4];
  toUnit = process.argv[5];
  to !== "to" || !(toUnit in unitStrings) || !(fromUnit in unitStrings) || unitStrings[fromUnit][0] != unitStrings[toUnit][0] || isNaN(toConvert) ? stop() : convert();
}

function stop() { console.log("Invalid parameters"); }

function forwards() {
  for (var i = unitStrings[fromUnit][1] + 1; i <= unitStrings[toUnit][1]; i++) {
    converted /= units[i][0];
  }
}

function backwards() {
  for (var i = unitStrings[fromUnit][1]; i > unitStrings[toUnit][1]; i--) {
    converted *= units[i][0];
  }
}

function convert() {
  converted = toConvert;
  unitStrings[fromUnit][1] > unitStrings[toUnit][1] ? backwards() : forwards();
  console.log(toConvert + " " + fromUnit + " are " + converted + " " + toUnit);
}