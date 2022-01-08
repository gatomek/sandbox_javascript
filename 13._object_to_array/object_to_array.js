console.log( "Demo - object to array in a functional way");

const schoolWins = {
    poli: 10,
    uni: 5,
    medyk: 1
};

const extSchoolWins = Object.keys( schoolWins).map( key => (
    {
        name: key,
        wins: schoolWins[key]
    }
));

console.log( schoolWins);

for( const item of extSchoolWins)
    console.log( item);
