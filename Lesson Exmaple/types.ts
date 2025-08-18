// Adding types Explicitly

let name:string = 'Tomer';
let age:number = 26;
let employed:boolean = false;



// Variables cannot change types
employed = 'Yes!'


// const variables must have a value when declared
const jobApplication;


// Using the 'Any' Type will accept all 
let jobsIWillAccept:any = 100;
jobsIWillAccept = '100';
jobsIWillAccept = true;


// Implicit types - Just as good!

let counter = 0; // number
let clickable = true; // boolean
let onClick = () => {clickable && console.log(counter)}; //function


