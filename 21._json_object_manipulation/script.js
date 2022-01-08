console.log( "Demo - destructuring exercices");

const person = {
    forename: "tomek",
    surname: "galinski",
    company: "apator",
    hello: () => console.log( "Hello World !")
}


const {forename} = person;
console.log( forename);

const {surname} = person;
console.log( surname);

const {company} = person;
console.log( company);

const {hello} = person;
hello();
