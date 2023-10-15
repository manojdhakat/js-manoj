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
// stack me copy milta he heap me refrence milta he
let myYoutubename = "manojdhakar"


let anothername = myYoutubename
anothername= "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "uder@ybl"

}

let userTwo = userOne

userTwo.email = "hites@google.com"

console.log(userOne.email);
console.log(userTwo.email);