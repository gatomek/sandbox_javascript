console.log( "Demo - deep pick");

const deepPick = ( path, o) => "";

const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};

deepPick( "type", dan);
deepPick( "data.info.fullname.first", dan);














