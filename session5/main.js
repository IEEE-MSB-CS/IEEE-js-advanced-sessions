// "use strict";
// ///////////////////////////////////////
// //1- Constructor Functions and the new Operator
// const Person = function (name, age) {
//   console.log(this);
//   this.name = name;
//   this.age = age;
//   console.log(this);
//   //Bad way !!! use prototypes!
//   // this.printInfo = function () {
//   //   console.log(`my name is ${this.name}\nand my age is ${this.age}`);
//   // };
// };
// const ahmed = "ahmed";
// const saleh = new Person("Saleh", 20);
// const omar = new Person("Omar", 20);
// console.log(saleh instanceof Person);
// console.log(ahmed instanceof Person);

// Person.prototype.printInfo = function () {
//   console.log(`my name is ${this.name}\nand my age is ${this.age}`);
// };
// Person.prototype.job = "sw";

// console.log(Person.prototype);

// /////////////////////////////////////////////
// //2- Prototype
// Person.prototype.printInfo = function () {
//   console.log(`my name is ${this.name}\nand my age is ${this.age}`);
// };

// console.log(Person.prototype);
// saleh.printInfo();

// //printInfo is inside the person's prototype , so why i can access printInfo in saleh's object ?
// console.log(saleh.__proto__);
// console.log(saleh.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(saleh));
// console.log(Object.prototype.isPrototypeOf(Person.prototype));
// console.dir(Person);
// console.log(Person.prototype);

// //We can put properties also not only functions inside the prototype.
// Person.prototype.job = "SW";
// console.log(Person.prototype);
// console.log(saleh.job);
// console.log(saleh.hasOwnProperty("name"));
// console.log(saleh.hasOwnProperty("job"));

// ///////////////////////////////////////////////
// //3-

// const arr = [1, 2, 3]; //new Array([1,2,3])
// console.log(arr.at(2));
// console.log(arr.__proto__);
// console.log((arr.__proto__ = Array.prototype));
// console.log(arr.at === Array.prototype.at);

// ///////////////////////////////////////////////
// //4- Prototype chain :
// console.log(saleh);

///////////////////////////////////////////////
//5- ES6 classes

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printInfo() {
//     console.log(`my name is ${this.name}\nand my age is ${this.age}`);
//   }
// }

// const saleh = new Person("saleh", 20);
// console.log(saleh);
// saleh.printInfo();
// console.log(saleh);
// console.log(saleh.__proto__);

///////////////////////////////////////////////
//6- inheritance between classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printInfo() {
    console.log(`my name is ${this.name}\nand my age is ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, gpa) {
    super(name, age);
    this.gpa = gpa;
  }
  printInfo2() {
    this.printInfo();
    console.log(`my gpa is ${this.gpa}`);
  }
}

const st = new Student("omar", 20, 4);
console.log(st);
st.printInfo();
