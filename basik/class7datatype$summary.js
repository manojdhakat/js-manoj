// primitive
 
// 7 type: String, Number, Boolean, null, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedId = false
const outSideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const BigNumber = 7435374573465197568n

// Reference (non primitive)
// Array, Object,function

const heros =  ["shaktiman", "neeraj", "doga"];   // Array
let myObj = {                                     // object
    name: "manoj",
    age: "20"

}

const myFunction = function (){            // function
    console.log("hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3







//************************************************************************************************************************************************


//  stack (primitive), heap(non-primitive)
let myYoutubename = "manojdhakar"


let anothername = myYoutubename
anothername= "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);