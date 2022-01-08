console.log( "Demo - array to object reducing");

const colors = [
    {
        id: "xekare",
        title: "red",
        rating: 3
    },
    {
        id: "jbwsof",
        title: "navyblue",
        rating: 2
    },
    {
        id: "prigbj",
        title: "lightgray",
        rating: 5
    },
    {
        id: "ryhbhsl",
        title: "yellow",
        rating: 1
    }
];

console.log( colors);
for( const c of colors)
    console.log( c);

const obj = colors.reduce( (hash, {id, title, rating}) => {
        hash[ id] = {title, rating};
        return hash;
    }, {}
);

console.log( obj);
