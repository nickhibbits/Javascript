const dino = require("../../dino.json");

console.log(dino.Dinos)

let form = document.querySelector("#dino-compare");
let grid = document.querySelector("#grid");
let nameField = document.querySelector("#name");
let feetField = document.querySelector("#feet");
let inchesField = document.querySelector("#inches")
let weightField = document.querySelector("#weight");
let dietField = document.querySelector("#diet")

// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species,
    this.weight = `${weight} lbs`,
    this.height = `${height} feet`,
    this.diet = diet,
    this.where = where,
    this.when = when,
    this.fact = fact
}

// Create Dino Objects
let dinoSet = dino.Dinos.map((e, i) => {
  return {
    newDino: new Dino(dino.Dinos[i].species, dino.Dinos[i].weight, dino.Dinos[i].height, dino.Dinos[i].diet, dino.Dinos[i].where, dino.Dinos[i].when, dino.Dinos[i].fact), //
  }
})

console.log("dinoSet", dinoSet);

// Create Dino Compare Method 1
Dino.prototype.compareWeight = () => { };

// Create Dino Compare Method 2
Dino.prototype.compareHeight = () => { };

// Create Dino Compare Method 3
Dino.prototype.compareDiet = () => { };

// Create Human Object -- with constructor or with object literal?
function Human(name, feet, inches, weight, diet) {
  this.name = name,
    this.heightFeet = feet,
    this.heightInches = inches,
    this.weight = weight,
    this.diet = diet
}

// Add tiles to DOM... with function?
function addTiles() {
  console.log("add tiles")
}

function onClick(event) {
  event.preventDefault();

  // Use IIFE to get human data from form
  let human = (function () {
    return {
      user: new Human(
        nameField.value,
        feetField.value,
        inchesField.value,
        weightField.value,
        dietField.value
      )
    }
  }())

  // dynamically create dino tiles
  for (let i = 0; i < dinoSet.length - 1; i++) {
    let dinoBlock = document.createElement("section");
    let list = document.createElement("ul")
    dinoBlock.classList.add("grid-item");
    dinoBlock.setAttribute("id", `dino-${i}`);

    //grab dino facts, create fields within block, populate fields with facts
    for (let x = 0; x < Object.keys(dinoSet[x].newDino).length; x++) {
      let field = document.createElement("li");
      field.setAttribute("id", `dino-fact-${x}`);

      let dinoFacts = Object.values(dinoSet[i].newDino);
      let dinoFact = dinoFacts[x];
      field.innerHTML = dinoFact;

      list.appendChild(field)
    }

    dinoBlock.appendChild(list);
    grid.appendChild(dinoBlock);

    console.log("dinoBlock", dinoBlock);

  }

  // console.log("grid", grid);

  // dynamically create human tile
  let humanBlock = document.createElement("section");
  let humanList = document.createElement("ul");
  humanBlock.classList.add("grid-item");
  humanBlock.setAttribute("id", "human");

  for (let i = 0; i < Object.keys(human.user).length; i++) {
    let blockField = document.createElement("li");
    blockField.setAttribute("id", `human-fact-${i}`);

    let userFacts = Object.values(human.user);
    let userFact = userFacts[i];
    blockField.innerHTML = userFact;

    humanList.appendChild(blockField);
  }

  humanBlock.appendChild(humanList);
  console.log("humanBlock", humanBlock);
  humanBlock.style.gridArea = "2 / 2 / 2 /2"

  grid.appendChild(humanBlock);

  //dynamically create pigeon tile
  let pigeonBlock = document.createElement("section");
  let pigeonList = document.createElement("ul");
  pigeonBlock.classList.add("grid-item");
  pigeonBlock.setAttribute("id", "pigeon");

  for (let i = 0; i < Object.keys(dinoSet[7].newDino).length; i++) {
    let factField = document.createElement("li");
    factField.setAttribute("id", `pigeon-fact-${i}`);

    let pigeonFacts = Object.values(dinoSet[7].newDino);
    let pigeonFact = pigeonFacts[i];
    factField.innerHTML = pigeonFact;

    pigeonList.appendChild(factField);
  }

  pigeonBlock.appendChild(pigeonList);
  console.log("pigeonBlock", pigeonBlock);
  grid.appendChild(pigeonBlock);

  console.log("grid", grid);

  form.style = "display: none";
  grid.style = "display: grid";
}

export { onClick }