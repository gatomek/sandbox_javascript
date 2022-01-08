console.log( "Demo - functions composing");

// 1. tablica funkcji
// 2. jak każda tablica może podlegać redukcji

const compose = (...functions) => value => {
    return functions.reduce( (currentValue, currentFunction) => { return currentFunction(currentValue); }, value);
};

const getSurname = person => person.surname;
const makeUpper = str => str.toUpperCase();
const reverse = str => {
    return str.split('')
              .reverse()
              .join( '');
}
const cutFirst = str => str.substr( 0, 1);

const person = { surname: "tomek" };

/* 1 */
const surname = getSurname( person);
const upperSurname = makeUpper( surname);
const revUpperSurname = reverse( upperSurname);
const cutRevUpperSurname = cutFirst( revUpperSurname);
console.log( `1. ${cutRevUpperSurname}`);

/* 2 */
const output = cutFirst( reverse( makeUpper( getSurname( person))));
console.log( `2. ${output}`);

/* 3 */
const pOutput = compose( getSurname, makeUpper, reverse, cutFirst)( person);
console.log( `3. ${pOutput}`);

