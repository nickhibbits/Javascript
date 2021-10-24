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
    this.height = `${height} feet`, // needs conversion for feet AND inches
    this.diet = diet,
    this.where = where,
    this.when = when,
    this.fact = fact
}

function FactSet(humanWeight, humanHeight, humanDiet, dinoLocation, dinoTimePeriod, dinoFact) {
  this.humanWeight = humanWeight,
  this.humanHeight = humanHeight, // needs conversion for feet AND inches
  this.humanDiet = humanDiet
  this.dinoLocation = dinoLocation,
  this.dinoTimePeriod = dinoTimePeriod,
  this.dinoFact = dinoFact
  this.compareWeight = function () {
    console.log("compareWeight")
    //logic to compare human to dino weight
    //different conditionals for different return values, if user input value is greater/less than dino values
    return "this dino weighed x amount more than you"
  }
  this.compareHeight = function () {
    console.log("compareHeight")
    //logic to compare human to dino height
    //different conditionals for different return values, if user input value is greater/less than dino values
    return "this dino was x feet and inches taller than you"
  }
  this.compareDiet = function () {
    console.log("compareDiet")
    //logic to compare human to dino diet
    //different conditionals for different return values, if user input value is different/the same than dino values
    return "this dino ate the same diet as you"
  }
}

// Create Dino Objects
let dinoSet = dino.Dinos.map((e, i) => {
  return {
    newDino: new Dino(dino.Dinos[i].species, dino.Dinos[i].weight, dino.Dinos[i].height, dino.Dinos[i].diet, dino.Dinos[i].where, dino.Dinos[i].when, dino.Dinos[i].fact), //
  }
})

// Create Human Object -- with constructor or with object literal?
function Human(name, feet, inches, weight, diet) {
  this.name = name,
    this.heightFeet = feet,
    this.heightInches = inches,
    this.weight = weight,
    this.diet = diet
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

  // dynamically create dino/pigeon tiles 
  function createDinoTiles() {
    for (let i = 0; i < dinoSet.length - 1; i++) {
      let block = document.createElement("section");
      let list = document.createElement("ul")
      block.classList.add("grid-item");
      block.setAttribute("id", `dino-${i}`);

      let speciesField = document.createElement("li");
      let factField = document.createElement("li");
      let speciesImage = document.createElement("img")

      speciesField.setAttribute("id", `dino-species-${i}`);
      factField.setAttribute("id", `dino-fact-${i}`);

      let species = dinoSet[i].newDino.species


      // if (dinoSet[i].newDino.species == Triceratops) {
      //   speciesImage.setAttribute("src", `../../images/triceratops`);
      // } 

      switch (species) {
        case "Triceratops":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/triceratops.png`);
          break;
        case "Tyrannosaurus Rex":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/tyrannosaurus-rex.png`);
          break;
        case "Anklyosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/anklyosaurus.png`);
          break;
        case "Brachiosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/brachiosaurus.png`);
          break;
        case "Stegosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/stegosaurus.png`);
          break;
        case "Elasmosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/elasmosaurus.png`);
          break;
        case "Pteranodon":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/pteranodon.png`);
          break;
        case "Pigeon":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", `../../images/pigeon.png`);
          break;
      }

      let dinoFacts = new FactSet(
        human.user.weight, 
        human.user.feet, 
        human.user.diet, 
        dinoSet[i].newDino.where,
        dinoSet[i].newDino.when,
        dinoSet[i].newDino.fact,
      );

      let randomNumber = Math.floor(Math.random() * 6) + 1;

      let factArray = Object.values(dinoFacts)
      let dinoFactsArray = factArray.splice(0, 3); // grab only dino facts and comparison methods
      let fact = dinoFactsArray[randomNumber];
      factField.innerHTML = fact;

      //need logic for pigeon tile

      const documentFragment = document.createDocumentFragment();
      documentFragment.appendChild(list);
      list.appendChild(speciesField);
      list.appendChild(speciesImage);
      list.appendChild(factField);

      block.appendChild(list);
      grid.appendChild(block);
    }
  }

  
  // dynamically create human tile
  function createHumanTile() {
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
    humanBlock.style.gridArea = "2 / 2 / 2 / 2"
    
    grid.appendChild(humanBlock);
  }

  createDinoTiles();
  createHumanTile();
}

export { onClick }