console.log( "Demo - adding new value to array in a functional way");

const appendNew = ( table, title) => [ ...table, {title}];

const table =  [
    {
        title: "Red"
    },
    {
        title: "Blue"
    },
    {
        title: "Black"
    }
];

const extTable = appendNew( table, "Yellow");

console.log( table);
console.log( extTable);













