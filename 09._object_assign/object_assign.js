/*
https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/

console.log( "Demo - niemodyfikowalność");

const changeStatus = function( person, s) {
    return Object.assign( {}, person, { status: s});
}

const changeStatus2 = ( person, status) => (
    {
        ...person,
        status
    }
);

const person = {
    forename: "Tomek",
    surname: "Galiński",
    age: 18,
    status: "single"
};

const person2 = changeStatus( person, "married");
const person3 = changeStatus2( person, "divorced");

console.log( person);
console.log( person2);
console.log( person3);
