console.log( "Demo - table destructuring");

// 1
const animals = [ "cat", "dog", "fish", "hamster"];

const [firstAnimal] = animals;
const [ , secondAnimal] = animals;
const [ , , thirdAnimal] = animals;

console.log( firstAnimal);
console.log( secondAnimal);
console.log( thirdAnimal);
