console.log( "Demo - recursive countdown");

const countToZero = (value, fn) => {
    fn( value);

    if( value > 0)
        return countToZero( value - 1, fn);
    else
        return value;
}

const result = countToZero( 10, value => console.log( value));
console.log( "---");
console.log( result);