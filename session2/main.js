'use strict';

// Code 0 --> in global context with/without the strict mode.

// console.log(this);

// Code 1 --> method (function inside an object).

// 1.1
// const person1 = {
//   name: 'Saleh',
//   age: 20,
//   printAge: function () {
//     console.log(this);
//     console.log(`The age of ${this.name} is ${person1.age}`);
//   },
// };
// person1.printAge();

// 1.2
// const person2 = {
//   name: 'Amr',
//   age: 22,
//   // printAge: function () {
//   //   console.log(this);
//   //   console.log(`The age of ${this.name} is ${person1.age}`);
//   // },
// };
// person2.printAge = person1.printAge;
// // person2.printAge();
// // person1.printAge();

// const dummy = person1.printAge;
// console.log(dummy);
// dummy();

/**************************************************************************************************/

// // Code 2 -->  function expression or regular function.
// const func1 = function () {
//   console.log("It's Function expression");
//   console.log(this);
// };
// func1();

/**************************************************************************************************/

// Code 3  --> arrow function
// const func2 = () => {
//   console.log("It's an arrow function");
//   console.log(this);
// };
// func2();

/**************************************************************************************************/

// Code 4 --> with event listener

// const me = {
//   name: 'Abdelrahman Shaheen',
//   age: 22,

//   printMe: function () {
//     console.log(`my name is ${this.name} ,and my age is ${this.age}`);
//   },
// };

// const a = document.querySelectorAll('btn');
// console.log(a);

/**************************************************************************************************/
// Regular Functions vs. Arrow Functions

// const person = {
//   name: 'shaheen',
//   age: 22,

//   printAge() {
//     console.log(this);
//     console.log(`my age is ${this.age}`);
//     // const that = this;
//     const printName = () => {
//       console.log(this);
//       console.log(this.name);
//     };
//     printName();
//   },
//   dummy: () => {
//     console.log('hello i am dummy function');
//     console.log(`I am inside ${this}`);
//     console.log(this.name);
//   },
// };
// person.printAge();
// person.dummy();

/**************************************************************************************************/
//Primitives Vs Reference Types in Memory ?

//primitives
// let x = 5;
// let y = x; //5

// y = 7; // 7
// console.log(x);
// console.log(y);
// //

//objects
// const person1 = {
//   name: 'Saleh',
//   age: 20,
// };

// const person2 = person1;

// person2.name = 'amr';
// person2.age = 22;

// console.log(person2);
// console.log(person1);
