const library = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },    
    {
        title: "Percy Jackson",
        author: "Rick Riordan",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },   
    {
        title: "Green Eggs and Ham",
        author: "Dr. Seuss",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

let { title: firstTitle } = library[0]

const str = JSON.stringify(library);

console.log(str)