//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) -> copy  && Heap(Non-primitive) -> reference

let myName="Anjul";
let anotherName=myName;
anotherName="Anjul Singh";

console.log(myName);
console.log(anotherName);


let user={
    email:"anjulsingh462@gmail.com",
    upi:"user@ybl"
}

let userTwo=user;
userTwo.email="anjulsingh000@gmaul.com"

console.log(user)   //anjulsingh000@gmaul.com
console.log(userTwo)  //anjulsingh000@gmaul.com


//https://firebasestorage.googleapis.com/v0/b/fir-53dbe.appspot.com/o/Screenshot%20(4095).png?alt=media&token=cf4171e8-616e-40ff-945c-05d9f7984ba3
