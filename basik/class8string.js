const name = "maoj-c"
const repoCount = 50
// console.log(name + repoCount + " value");  purana methad he ye

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //   nyaa tarekaa


const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));



const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // - me ulta likha milta he
console.log(anotherString);

const newStringOne ="   hites  "
console.log(newStringOne);
console.log(newStringOne.trim());



const url ="https://manoj.com/manoj%20dhakar"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))