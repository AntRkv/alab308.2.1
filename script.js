//Part 1: Growing Pains

let pi = 3.14;
let r = 5;
let area = pi * r ** 2;
console.log("Area = " + area);

let numsOfPlants = 20;
let sqPlntz = 0.8;

let maxCap = area / sqPlntz;
console.log("Max capaciity " + maxCap);

// Week one

let weekOneArea = numsOfPlants * 2 * 0.8;

if (weekOneArea > area * 0.8) {
  console.log("Pruned");
} else if (weekOneArea >= 50 && weekOneArea <= 80) {
  console.log("Monitored");
} else {
  console.log("Planted");
}

// Week two

let weekTwoArea = weekOneArea * 2;

if (weekTwoArea > area * 0.8) {
  console.log("Pruned");
} else if (weekOneArea >= 50 && weekOneArea <= 80) {
  console.log("Monitored");
} else {
  console.log("Planted");
}

// Week three

let weekThreeArea = weekTwoArea * 2;

if (weekThreeArea > area * 0.8) {
  console.log("Pruned");
} else if (weekOneArea >= 50 && weekOneArea <= 80) {
  console.log("Monitored");
} else {
  console.log("Planted");
}

//Part 2: Thinking Bigger

let numsOfPlantareaAnother = 100;
let areaFor100 = numsOfPlantareaAnother * sqPlntz;

console.log("Area requred for begining " + areaFor100);
let areaAfterTenWeeks = areaFor100 * 2 ** 10;
console.log("Area will increase to " + areaAfterTenWeeks);

let radius = Math.sqrt(areaAfterTenWeeks / pi);
console.log("Radius: " + radius);

//Part 3: Errors in Judgement

try {
	if (area >= areaFor100) {
		console.log("Enough space..");
	} else {
		throw "Error: wrong number of plants for available area.";
	}
} catch (error) {
	console.log(error);
}

