class Dino {
  constructor(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = `${weight} lbs`;
    this.height = `${height} feet`; // needs conversion for feet AND inches
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
  }
}

class Triceratops extends Dino {

}