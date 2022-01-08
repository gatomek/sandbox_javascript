console.log( "Demo - object structuring");

const forename = "tomek";
const surname = "galinski";
const print = function() {
    console.log(`${this.forename} ${this.surname}`);
}

const user = { forename, surname, print};

console.log( user);
user.print();

