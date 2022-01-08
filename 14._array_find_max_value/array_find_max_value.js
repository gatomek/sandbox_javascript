console.log( "Demo - finding max value in array");

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce( (max, age) => (age > max) ? age : max, 0);

console.log( maxAge);
