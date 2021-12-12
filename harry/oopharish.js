// function sayHello() {  // function declaration
//   console.log("Hello");
// }

// sayHello();


// var sayGoodbye = function () { console.log('saying good bye') }  // function expression
// var sayGoodMorning = () => { console.log('saying good morning') }  // function expression


// sayGoodbye();
// sayGoodMorning();


// function add(a=1, b=2) {
//   return  a + b;
// }
// console.log(add(3,4));


// var add1 = function (a, b) {
//   return a + b;
// }

// console.log(add1(2,3))

// var add3 = (a, b) => a + b

// var value = add3(1, 2);

// console.log(value)


// function func(ab) {
//   console.log(ab(10,2));
// }


// func(function (a,b) {
//   return  a+b;
// });

// // [1,3,5,7,9].forEach(function(ele, index, array) {
// //   console.log(ele , index, array)
// // }) 

// // console.log(forEachedArr)



// forEach(cb){
//   cb(1, 0, [1,3,5,7,9]),
//   cb(3, 1, [1,3,5,7,9]),
//   cb(5, 2, [1,3,5,7,9]),
//   cb(7, 3, [1,3,5,7,9]),
//   cb(9, 4, [1,3,5,7,9])
// }


// map // returns new array []
// filter // returns new array []
// forEach 


// var arr1 = [1,2,3,4,5,6,7,8,9,10];

// var newArr1 = arr1.map(function(ele, index, array) {
//   return ele * 2;
// }) // [2,4,6,8,10,12,14,16,18,20]


// console.log(newArr1);

// var filterArr = arr1.filter(ele => ele > 5) // [6,7,8,9,10]

// console.log(filterArr);


// function func (cb){
//   cb();
// }


// func(function () {
//   console.log('hello')
// })



// var a =10;
// var b = 20;

// console.log(a, b);

// setTimeout(() => console.log('hello world 2s'), 2000);
// setTimeout(() => console.log('hello world 1s'), 3000);
// setTimeout(() => console.log('hello world 0s'), 0);

// setInterval(() => console.log('hello world interval'), 1000);

// console.log(a + b);



// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('i came to the trip'), 2000);
//    //setTimeout(() => reject('i did not come to the trip'), 2000);
// }) // promise creation

// var message;

// p1
//   .then((a) => a + 'this is returned from then')
//   .then( b => b + 'this is returned from then again')
//   .then( c => {
//     console.log(c);
//   })
//   .catch((error) => alert(error)) // promise execution or cosuming



// // function constructors 



// var i10 = { 
//   name: 'i10', 
//   color: 'red', 
//   wheels: 4, 
//   fuel: 'petrol', 
//   start: function () { console.log('vroom') }  
// };

// var i20 = { name: 'i20', color: 'red', wheels: 4, fuel: 'petrol', start: function () { console.log('vroom') }  };
// var i30 = { name: 'i30', color: 'color', wheels: 4, fuel: 'petrol', start: function () { console.log('vroom') }  };



// i10.start();



// var arr1 = new Array();
// var obj = new Object();
// var str = new String('hello');
// var number = new Number(1);


// var arr1 = [] // array literal
// var obj = {} // object literal
// var str = 'hello' // string literal
// var number = 1 // number literal

// console.log(arr1, obj, str, number);


// var i10 = { 
//   name: 'i10', 
//   color: 'red', 
//   wheels: 4, 
//   fuel: 'petrol', 
//   start: function () { console.log('vroom') }  
// };

// var i20 = { name: 'i20', color: 'red', wheels: 4, fuel: 'petrol', start: function () { console.log('vroom') }  };
// var i30 = { name: 'i30', color: 'color', wheels: 4, fuel: 'petrol', start: function () { console.log('vroom') }  };



// i10.start();


// function Car(a, b, c, d) {
//   this.name = a;
//   this.color = b;
//   this.wheels = c;
//   this.fuel = d;
// }
// //---------------------------------------------------------
// Car.prototype.start = function () {
//   return ('vroom');
// }


// var i10 = new Car('i10', 'red', 4, 'petrol'); // object creation - {  }

// // var i10 = { 
// //   name: 'i10', 
// //   color: 'red', 
// //   wheels: 4, 
// //   fuel: 'petrol', 
// // };


// var i20 = new Car('i20', 'blue', 4, 'petrol'); // object creation - {  }

// console.log(i10.start);
// console.log(i20);



// function Vehicle(name, variant, topSpeed, model, engine){
//   this.name = name;
//   this.variant = variant;
//   this.topSpeed = topSpeed;
//   this.model = model;
//   this.engine = engine;
// }

// Vehicle.prototype.gear = () => 'automatic';
// Vehicle.prototype.start = () => 'vroom';

// var volvo = new Vehicle('volvo', 's60', '120', 'v60', 'v8');
// console.log(volvo.gear());
// console.log(volvo);

//---------------------------------------------------------
// function BigVehicle (seatingCapacity, name, variant, topSpeed, model, engine) {
//   this.seatingCapacity = seatingCapacity;
//   Vehicle.call(this, name, variant, topSpeed, model, engine); //extending one function constructor to another
// }


// var bigVehicleConstructor = BigVehicle.prototype.constructor;
// BigVehicle.prototype = Vehicle.prototype // inheriting the prototype of Vehicle
// BigVehicle.prototype.type = () => 'big';
// BigVehicle.prototype.constructor = bigVehicleConstructor; // setting the constructor back to the original constructor




// var bmw = new BigVehicle(5, 'bmw', 's60', '120', 'v60', 'v8'); // {}
// // console.log(bmw.gear());
// // console.log(bmw.start());

// console.log(bmw);

// // OOP - Object Oriented Programming
// // partially oop - object oriented programming

// // 1. Data Encapsulation
// // 2. Inheritance
// // 3. Polymorphism
// // 4. Abstraction



// class Car {
//   constructor(name, color, wheels, fuel) {
//     this.name = name;
//     this.color = color;
//     this.wheels = wheels;
//     this.fuel = fuel;
//   }
//   start() {
//     return 'vroom'
//   }
// }

// var car = new Car('i10', 'red', 4, 'petrol');
// console.log(car);

// class BigCar extends Car {
//   constructor(name, color, wheels, fuel, seatingCapacity) {
//     super(name, color, wheels, fuel);
//     this.seatingCapacity = seatingCapacity;
//   }
//   gear() {
//     return 'automatic';
//   }
// }

// var bigCar = new BigCar('bmw', 'red', 4, 'petrol', 5);

// console.log(bigCar);




// async
// get
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET',
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // post
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John', username: 'john' })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));




