console.log( "Demo - remove duplicates in array in a functional way");

const numbers = [1, 2, 4, 6, 7, 9, 6, 6, 1, 2];

const uniqueNumbers = numbers.reduce( (unique, value) => (unique.indexOf( value) == -1) ? [ ...unique, value] : unique, []);

console.log( numbers);
console.log( uniqueNumbers);
