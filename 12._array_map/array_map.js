console.log( "Demo - array map");

const appendLength = item => ( { desc: item, id: item.length } );

const transformWithName = item => ( { name: item } );

const updateLen = (arr, desc, id) =>
    arr.map( (item) => {
            if( item.desc === desc)
                return {
                    ...item,
                    id
                };
            else
                return item;
        }
    );

const highSchools = [ "poli", "uni", "medyk"];

console.log( highSchools);

const extHighSchools = highSchools.map( appendLength);
const updatedHighSchools = updateLen( extHighSchools, "poli", 13);
const namedHighSchools = highSchools.map( transformWithName);

for( const item of extHighSchools)
    console.log( item);

for( const item of updatedHighSchools)
    console.log( item);

for( const item of namedHighSchools)
    console.log( item);
