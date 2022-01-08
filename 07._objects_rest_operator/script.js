console.log( "Demo - rest operator for objects");

const morning = {
    breakfast: "eggs",
    lunch: "meat"
}

console.log( morning);

const supper = "soup";

console.log( supper);

const catering = {
    ...morning,
    supper
}

console.log( catering);
