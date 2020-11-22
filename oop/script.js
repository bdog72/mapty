// //
// //

// 'use strict';

////////////////////////////////////////////////////

const account = {
  owner: 'Jonas',
  movements: [100, 200, 300, 400, 500, 600],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

////////////////////////////////////////////////////

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet(a) {
//     console.log(`Hey ${a} ${this.firstName}`);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// jessica.calcAge();

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet('bozo');

////////////////////////////////////////////////////
// // class Person {
// //   constructor(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   }
// // }

// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   this.calcAge = function () {
// //     // console.log(2017 - this.birthYear);
// //   };
// // };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// // console.log(matilda);

// const jack = new Person('Jack', 1975);
// // console.log(jack);

// // console.log(jonas instanceof Person);
// // console.log(Person.prototype);

// // Person.prototype.calcAge = function () {
// //   // console.log(2037 - this.birthYear);
// // };

// // jonas.calcAge();
// // matilda.calcAge();
// // jack.calcAge();

// // console.log(jonas.__proto__);

// // Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species);

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);

// // console.log(Person.prototype.constructor);

// // const array = [1, 1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10];

// // console.log(array);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(array.unique());

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is going at ${this.speed}`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} is going at ${this.speed}`);
// // };

// // const bwm = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);

// // bwm.accelerate();
// // bwm.accelerate();
// // bwm.accelerate();
// // bwm.brake();
// // mercedes.accelerate();
// // mercedes.brake();

// // Car.prototype.accelerate = function (speed) {
// //   console.log(speed + 10);
// // };

// // Car.prototype.brake = function (speed) {
// //   console.log(speed - 5);
// // };

// // const car = new Car('Ford', 65);
// // car.accelerate(65);

// // console.log(car);

// //////////////////////////////////////////////////
