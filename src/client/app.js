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
// **Needs DRY code** -- use loop to create an array "dinoSet", that you can call in the loop to create dino squares
let triceratops = new Dino(dino[0].species, dino[0].weight, dino[0].height, dino[0].diet, dino[0].where, dino[0].when, dino[0].fact)
let tRex = new Dino(dino[1].species, dino[1].weight, dino[1].height, dino[1].diet, dino[1].where, dino[1].when, dino[1].fact)
let anklyosaurus = new Dino(dino[2].species, dino[2].weight, dino[2].height, dino[2].diet, dino[2].where, dino[2].when, dino[2].fact)
let brachiosaurus = new Dino(dino[3].species, dino[3].weight, dino[3].height, dino[3].diet, dino[3].where, dino[3].when, dino[3].fact)
let stegosaurus = new Dino(dino[4].species, dino[4].weight, dino[4].height, dino[4].diet, dino[4].where, dino[4].when, dino[4].fact)
let elasmosaurus = new Dino(dino[5].species, dino[5].weight, dino[5].height, dino[5].diet, dino[5].where, dino[5].when, dino[5].fact)
let pteranodon = new Dino(dino[6].species, dino[6].weight, dino[6].height, dino[6].diet, dino[6].where, dino[6].when, dino[6].fact)
let pigeon = new Dino(dino[7].species, dino[7].weight, dino[7].height, dino[7].diet, dino[7].where, dino[7].when, dino[7].fact)

// Create Dino Compare Method 1
Dino.prototype.compareWeight = () => {};

// Create Dino Compare Method 2
Dino.prototype.compareHeight = () => {};

// Create Dino Compare Method 3
Dino.prototype.compareDiet = () => {}

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

  // Use IIFE (??) to get human data from form
  let user = new Human(nameField.value, feetField.value, inchesField.value, weightField.value, dietField.value);

  // dynamically create dino tiles
  // **Needs DRY code**
  // use a loop index to set the id of each square "dino-one, dino-two, etc"
  for (let i = 0; i < dinoSet.length; i++ ) {
    let dinoBlock = document.createElement("section");
    dinoBlock.classList.add("grid-item");
    dinoBlock.setAttribute("id", `dino-${i}`)

    //grab dino facts, create fields within block, populate fields with facts
    for (let x = 0; x < Object.keys(dinoSet[x]).length; x++) {
      let field = document.createElement("div");
      field.setAttribute("id", `dino-fact-${x}`)

      dinoFacts = Object.values(dinoSet[x]);
      let dinoFact = dinoFacts[x];

      field.innerHTML = dinoFact;

      dinoBlock.appendChild(field)
    }

    grid.appendChild(dinoBlock);
  }


  // dynamically create human tile
  let humanBlock = document.createElement("section");
  humanBlock.classList.add("grid-item");
  humanBlock.setAttribute("id", "human");

  for (let i = 0; i < Object.keys(user).length; i++) {
    let blockField = document.createElement("div");
    blockField.setAttribute("id", `human-fact-${i}`);

    let userFacts = Object.values(user)
    let userFact = userFacts[i]

    blockField.innerHTML = userFact
        
    humanBlock.appendChild(blockField);
  }

  grid.appendChild(humanBlock);

  //dynamically create pigeon tile
  let pigeonBlock = document.createElement("section");
  pigeonBlock.classList.add("grid-item");
  pigeonBlock.setAttribute("id", "pigeon");

  for (let i = 0; i < Object.keys(user).length; i++) {
    let blockField = document.createElement("div");
    blockField.setAttribute("id", `pigeon-fact-${i}`);

    let userFacts = Object.values(user)
    let userFact = userFacts[i]

    blockField.innerHTML = userFact
        
    pigeonBlock.appendChild(blockField);
  }

  grid.appendChild(pigeonBlock);

  form.style = "display: none";
  grid.style = "display: grid";
}

export { onClick }