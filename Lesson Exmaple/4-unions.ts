// -- Using unions --

function fetchContent(apiKey:string) {
    if (apiKey === '4321') return null;
    return "Actor's Name"
}


let actor:string; // <-- Fix this 


actor = fetchContent('1234');