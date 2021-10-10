import { DiagnosticCategory } from "typescript";
import { Dinos } from "../../dino.json"

let dino = Dinos;

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
        this.weight = weight,
        this.height = height,
        this.diet = diet,
        this.where = where,
        this.when = when,
        this.fact = fact
}

// Create Dino Objects
let dinoSet = dino.map((e, i, a) => {
  return {
    newDino: new Dino(dino[i].species, dino[i].weight, dino[i].height, dino[i].diet, dino[i].where, dino[i].when, dino[i].fact), //
  }
})

console.log("dinoSet", dinoSet)

// Create Dino Compare Method 1
Dino.prototype.compareWeight = () => {};

// Create Dino Compare Method 2
Dino.prototype.compareHeight = () => {};

// Create Dino Compare Method 3
Dino.prototype.compareDiet = () => {};

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

function onClick (event) {
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
  for (let i = 0; i < dinoSet.length; i++ ) {
    let dinoBlock = document.createElement("section");
    dinoBlock.classList.add("grid-item");
    dinoBlock.setAttribute("id", `dino-${i}`);

    //grab dino facts, create fields within block, populate fields with facts
    for (let x = 0; x < Object.keys(dinoSet[x]).length; x++) {
      let list = document.createElement("ul")
      let field = document.createElement("div");
      field.setAttribute("id", `dino-fact-${x}`);

      dinoFacts = Object.values(dinoSet[x]);
      let dinoFact = dinoFacts[x];
      field.innerHTML = dinoFact;

      list.appendChild(field)
    }

    dinoBlock.appendChild(list);
    grid.appendChild(dinoBlock);

  }


  // dynamically create human tile
  let humanBlock = document.createElement("section");
  humanBlock.classList.add("grid-item");
  humanBlock.setAttribute("id", "human");

  for (let i = 0; i < Object.keys(human.user).length; i++) {
    let humanList = document.createElement("ul");
    let blockField = document.createElement("div");
    blockField.setAttribute("id", `human-fact-${i}`);

    let userFacts = Object.values(user);
    let userFact = userFacts[i];
    blockField.innerHTML = userFact;
        
    humanList.appendChild(blockField);
  }
  
  humanBlock.appendChild(humanList);
  grid.appendChild(humanBlock);

  //dynamically create pigeon tile
  let pigeonBlock = document.createElement("section");
  pigeonBlock.classList.add("grid-item");
  pigeonBlock.setAttribute("id", "pigeon");

  for (let i = 0; i < Object.keys(user).length; i++) {
    let pigeonList = document.createElement("ul");
    let factField = document.createElement("div");
    factField.setAttribute("id", `pigeon-fact-${i}`);

    let pigeonFacts = Object.values(dinoSet[7]);
    let pigeonFact = pigeonFacts[i];
    factField.innerHTML = pigeonFact;

    pigeonList.appendChild(factField);
        
  }
  
  pigeonBlock.appendChild(factField);
  grid.appendChild(pigeonBlock);

  form.style = "display: none";
  grid.style = "display: grid";
}

export { onClick }