console.log( "Demo - array filter");

const highSchools = [ "politechnika", "uniwersytet", "medyk"];

console.log( highSchools.join( ', '));

const filteredHighSchools = highSchools.filter( item => item.startsWith( "p"));

console.log( filteredHighSchools);

