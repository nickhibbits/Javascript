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
class Dino {
  constructor(species, weight, height, diet, where, when, fact) {
    this.species = species,
      this.weight = weight
    this.height = height // in inches
    this.diet = diet,
      this.where = where,
      this.when = when,
      this.fact = fact,
      this.compareWeight = function (humanWeight) {
        if (humanWeight > this.weight) {
          return `This dino weighed ${humanWeight - this.weight} pounds less than you `
        } else if (humanWeight < this.weight) {
          return `This dino weighed ${this.weight - humanWeight} pounds more than you `
        } else {
          return "You weigh the same as this dinosaur!"
        }
      },
      this.compareHeight = function (humanHeight) {
        console.log("compareHeight")
        //logic to compare human to dino diet
        //different conditionals for different return values, if user input value is different/the same than dino values
        return "compareHeight value"
      }
    this.compareDiet = function (humanDiet) {
      console.log("compareDiet")
      //logic to compare human to dino diet
      //different conditionals for different return values, if user input value is different/the same than dino values
      return "compareDiet value"
    }
  }
}

// Create Dino Objects
let dinoSet = dino.Dinos.map((e, i) => {
  return {
    newDino: new Dino(dino.Dinos[i].species, dino.Dinos[i].weight, dino.Dinos[i].height, dino.Dinos[i].diet, dino.Dinos[i].where, dino.Dinos[i].when, dino.Dinos[i].fact), //
  }
})
console.log("dinoSet", dinoSet)

// Create Human Object -- with constructor or with object literal?
class Human {
  constructor(name, feet, inches, weight, diet) {
    this.name = name;
    this.height = feet * 12 + inches;
    this.weight = `${weight} lbs`;
    this.diet = diet;
  }
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

      let randomNumber = Math.floor(Math.random() * 6);

      let factKeys = Object.keys(dinoSet[i].newDino);
      let filteredFacts = factKeys.splice(1, 6);
      let whatAreWeComparing = filteredFacts[randomNumber];

      if (species == "Pigeon") {
        factField.innerHTML = "All birds are living dinosaurs"
      } else {
        switch (whatAreWeComparing) {
          case "diet":
            factField.innerHTML = dinoSet[i].newDino.compareDiet(human.user.diet);
            break;
          case "height":
            factField.innerHTML = dinoSet[i].newDino.compareHeight(human.user.height);
            break;
          case "weight":
            factField.innerHTML = dinoSet[i].newDino.compareWeight(human.user.weight);
            break;
          case "where":
            factField.innerHTML = `This dino lived in ${dinoSet[i].newDino.where}`;
            break;
          case "when":
            factField.innerHTML = `This dino lived during the ${dinoSet[i].newDino.when} period`;
            break;
          case "fact":
            factField.innerHTML = `Fun fact... ${dinoSet[i].newDino.fact}`;
            break;
        }
      }

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
    humanBlock.classList.add("grid-item");
    humanBlock.setAttribute("id", "human");

    let nameField = document.createElement("h2");
    nameField.setAttribute("id", `human-name`);
    let userName = human.user.name;
    nameField.innerHTML = userName;

    humanBlock.appendChild(nameField);
    humanBlock.style.gridArea = "2 / 2 / 2 / 2"
    humanBlock.style.display = "flex"
    humanBlock.style.flexDirection = "column"
    humanBlock.style.justifyContent = "center"

    grid.appendChild(humanBlock);
  }

  createDinoTiles();
  createHumanTile();

  form.style = "display: none";
  grid.style = "display: grid";
}

export { onClick }