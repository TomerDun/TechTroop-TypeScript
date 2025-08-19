// -- Using unions --

function fetchContent(apiKey:string) {
    if (apiKey === '4321') return null;
    return "Will Smith"
}


let actor:string; // <-- Fix this 


actor = fetchContent('1234');


// --We can also use unions together with type literals--

let theme: 'Light' | 'Dark';

theme = 'Dragons';
