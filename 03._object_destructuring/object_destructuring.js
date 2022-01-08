console.log( "Demo - object destructuring");

// 1
const sandwich = 
{
    bread: "chleb żytni",
    meat: "makrela",
    cheese: "ser szwajcarski",
    toppings: [ "sałata", "pomidor", "musztarda"]
}

console.log( sandwich);
// 1
console.log("--------------------")
let { bread, meat } = sandwich;
console.log( bread);
console.log( meat);

// 2
console.log("--------------------")
const getCheese = ( {cheese}) => console.log( cheese);
getCheese( sandwich);

// 3
console.log("--------------------")
const car = {
    mark: "opel",
    model: "meriva",
    engine: {
        manufacture: "GE"
    }
}

const getEngineManufacturer = ({engine: {manufacture} }) => manufacture
console.log( getEngineManufacturer( car));
