"use strict";
// //1- this in event handlers

// const me = {
//   name: "abdelrahman",
//   age: 22,
//   printMe: function () {
//     console.log(this);
//     console.log(`my name ${this.name} , age is ${this.age}`);
//   },
// };

// document.querySelector("button").addEventListener("click", me.printMe);

// so how to solve the problem ???

// *****************************************************************************************//
// 2- first class and higher order.
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // const greeter = greet("Salamooo 3alykooo");
// // greeter("Omar");
// // greeter("Saleh");

// greet("Salamooo 3alykooo")("omar");
// greeter = function (name) {
//   console.log(`${greeting} ${name}`);
// };

// greet("Hello")("Abdelrahman");

// Side note :
/*
the greeting(value) is still coming from this greet function here.
And in case you're wondering why that actually works,
it is because of something called a "closure" --> you'll know about it at the end of the session.
*/

// *****************************************************************************************//
// //3-
// const person1 = {
//   firstName: "Saleh",
//   lastName: "Bedda",

//   printInfo(age, job) {
//     console.log(
//       `The name of the person is ${this.firstName} ${this.lastName} and his age is ${age}`
//     );
//     console.log(`My job is ${job}`);
//   },
// };

// const fun = function () {
//   console.log(this);
// };
// const person2 = {
//   firstName: "omar",
//   lastName: "meska",
// };

// let func = person1.printInfo;
// func.apply(person2, [22, "SW"]);

// func.call(person2, 20);

// person1.printInfo(22);

// func.call(person1);

// error cuz "func" is a regular function.
// so how to solve this problem ?

// func.call(person1, 22);

// call will set this to the person1 and then will call the "func" with "this" points to person1.
// by this we can call person2 ,person3 and as many as we want.

// *****************************************************************************************//

// // 4- bind method.

// func = func.bind(person1, 60);
// func("jobless");

// const me = {
//   name: "abdelrahman",
//   age: 22,
//   printMe: function () {
//     console.log(this);
//     console.log(`my name ${this.name} , age is ${this.age}`);
//   },
// };

// const person2 = {
//   name: "omar",
//   age: 20,
// };
// document.querySelector("button").addEventListener("click", me.printMe.bind(me));
// const p = me.printMe.bind(person2);
// p();
// *****************************************************************************************//

// //5- Closures
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHello = greet("hello");
// greeterHello("Omar");
