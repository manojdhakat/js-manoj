let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleDateString ());


let myCreatedDate = Date.now()

// console.log(myTimesStap);
// console.log(myCreatedDate.getDate());
// console.log(Math.floor(Date.now()/1000));

let newDate = Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getday());

// `${newDate.getday()}`  and the time
newDate.toLocaleString('dafault', {
    weekday:"long",
})

