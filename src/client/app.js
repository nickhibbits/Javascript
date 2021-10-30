import anklyosaurus from "../../images/anklyosaurus.png";
import brachiosaurus from "../../images/brachiosaurus.png";
import elasmosaurus from "../../images/elasmosaurus.png";
import pigeon from "../../images/pigeon.png";
import pteranodon from "../../images/pteranodon.png";
import stegosaurus from "../../images/stegosaurus.png";
import triceratops from "../../images/triceratops.png";
import tyrannosaurus from "../../images/tyrannosaurus-rex.png";
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

// Add compare functions to dino prototype, delete factset for easier readability 

function FactSet(dinoWeight, dinoHeight, dinoDiet, dinoLocation, dinoTimePeriod, dinoFact) {
  this.dinoWeight = dinoWeight
  this.dinoHeight = dinoHeight
  this.dinoDiet = dinoDiet,
    this.dinoLocation = dinoLocation,
    this.dinoTimePeriod = dinoTimePeriod,
    this.dinoFact = dinoFact,
    this.compareWeight = function (humanWeight) {
      console.log("compareWeight")

      let message;
      if (humanWeight > this.dinoWeight) {
        return `This dino weighed ${humanWeight - this.dinoWeight} pounds less than you `
      } else if (humanWeight < this.dinoWeight) {
        return `This dino weighed ${this.dinoWeight - humanWeight} pounds more than you `
      } else {
        return "You weigh the same as this dinosaur!"
      }
    },
    this.compareDiet = function (humanDiet) {
      console.log("compareDiet")
      //logic to compare human to dino diet
      //different conditionals for different return values, if user input value is different/the same than dino values
      return "this dino ate the same diet as you"
    }
}

FactSet.prototype.compareHeight = function (humanHeight) {
  console.log("compareHeight")
  //logic to compare human to dino height
  //different conditionals for different return values, if user input value is greater/less than dino values
  return "this dino was x feet and inches taller than you"
}

// Create Dino Objects
let dinoSet = dino.Dinos.map((e, i) => {
  return {
    newDino: new Dino(dino.Dinos[i].species, dino.Dinos[i].weight, dino.Dinos[i].height, dino.Dinos[i].diet, dino.Dinos[i].where, dino.Dinos[i].when, dino.Dinos[i].fact), //
  }
})
console.log("dinoSet", dinoSet)

// Create Human Object -- with constructor or with object literal?
function Human(name, feet, inches, weight, diet) {
  this.name = name,
    this.height = `${feet}'${inches}`,
    this.weight = `${weight} lbs`,
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

  console.log("human", human)

  // dynamically create dino/pigeon tiles 
  function createDinoTiles() {
    for (let i = 0; i < dinoSet.length; i++) {
      let block = document.createElement("section");
      let list = document.createElement("ul")
      block.classList.add("grid-item");
      block.setAttribute("id", `dino-${i}`);

      let speciesField = document.createElement("li");
      let factField = document.createElement("li");
      let speciesImage = document.createElement("img")

      let species = dinoSet[i].newDino.species

      switch (species) {
        case "Triceratops":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", triceratops);
          break;
        case "Tyrannosaurus Rex":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", tyrannosaurus);
          break;
        case "Anklyosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", anklyosaurus); // test loading image with file loader here
          break;
        case "Brachiosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", brachiosaurus);
          break;
        case "Stegosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", stegosaurus);
          break;
        case "Elasmosaurus":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", elasmosaurus);
          break;
        case "Pteranodon":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", pteranodon);
          break;
        case "Pigeon":
          speciesField.innerHTML = species;
          speciesImage.setAttribute("src", pigeon);
      }

      let dinoFacts = new FactSet(
        dinoSet[i].newDino.weight,
        dinoSet[i].newDino.height,
        dinoSet[i].newDino.diet,
        `this dinosaur lived in ${dinoSet[i].newDino.where}`,
        dinoSet[i].newDino.when,
        `Fun fact: ${dinoSet[i].newDino.fact}`,
      );

      let randomNumber = Math.floor(Math.random() * 6) + 1;

      let factArray = Object.values(dinoFacts);
      // console.log("factArray", factArray);

      let filteredFacts = factArray.splice(2, 7);
      let fact = filteredFacts[randomNumber];

      // TODO
      // - Create a variable called "whatAreWeComparing"
      // - When deciding a random fact, set ^ equal to "height" or "weight" or "diet"
      // if (whatAreWeComparing == "height") { dinoFacts.compareHeight() }

      //TODO compare type, not  
      if (fact == dinoFacts.compareDiet) {
        factField.innerHTML = dinoFacts.compareDiet();
      } else if (fact == dinoFacts.compareHeight) {
        factField.innerHTML = dinoFacts.compareHeight();
      } else if (fact == dinoFacts.compareWeight) {
        factField.innerHTML = dinoFacts.compareWeight(human.user.weight);
        // factField.innerHTML = fact(human.user.weight);
        console.log("factField", factField)
        console.log("compareWeight bb", dinoFacts.compareWeight(human.user.weight))
      }

      species == "Pigeon" ? factField.innerHTML = dinoFacts.dinoFact : factField.innerHTML = fact;

      //need logic for pigeon tile

      const documentFragment = document.createDocumentFragment();
      documentFragment.appendChild(list);
      list.appendChild(speciesField);
      list.appendChild(factField);

      block.appendChild(list);
      block.appendChild(speciesImage);
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

  form.style = "display: none";
  grid.style = "display: grid";
}

export { onClick }