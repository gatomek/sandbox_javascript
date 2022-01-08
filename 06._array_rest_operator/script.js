console.log( "Demo - rest operator for arrays");

// 1
const t0 = ['a', 'b', 'c'];
const t1 = ['d', 'e', 'f'];
const t2 = [t0, t1];
const t3 = [...t0, ...t1];

console.log( t2);
console.log( t3);
console.log( t3.join( ',  '));

// 2

const [first] = t3;
console.log( first);
const [last] = [...t3].reverse();
console.log( last);


// 3
const tops = ["rysy", "giewont", "gerlach", "kościelisko"];
const [topFirst, ...topOthers] = tops;
console.log( topFirst);
console.log( topOthers);

