// nowy zapis funkcji - funkcja strzałki ES6
const log = info => console.log( info)
log( "Hello World!");

// nowa możliwość formatowania łańcuchów znakowych
const log2 = userName => console.log( `Hello, ${userName} !`);
log2( "Tomek");

// wartości domyślne parametrów
const getLocation = (location = "Lódź") => console.log( location);
getLocation();
getLocation( "Warszawa");

// need for curly brackets to object returning
const getDefaultUser = () => ({ name: "Jan", surname: "Kowalski"});
console.log( getDefaultUser());



