

var name = 'harish'; // declare and assign value
var age; // declare
age = 10; // assign


var nation = 'india' // 1ex1000
nation = 'indi' // 1ex5000

nation = 'usa' // 1ex3000     //copy by value

var nation = 'cananda'


console.log(nation)


const fruits = [ 'mango', 'orange' ] // 1ex2000


fruits[2] = 'grape' // 1ex2000




// ----------------------- DECLARATION AND ASSIGNMENT------------------


var person1 = 'SHIVARAM';

var person1 = 'AKHIL'; // can be redclared as many as times

person1 = 'AKHIL2' // can be reassigned new value


let person2 = 'VAISHNAVI';
// let person2 = 'PULUSU'; // Cannot be redeclared
person2 = 'PULUSU'; // can be assigned

const person3 = 'HARISH';
// const person3 = 'PONNA' // cannot be redclared
// person3 = 'PONNA' // cannot be re assigned;



// ----------------------- SCOPE --------------------------


// 1. var is a functional scope
// 2. let and const are block scopes

var myName = 'ABHILASH';


function sayName(){
    var myName = 'GUJJETI' // myName is function scope. it wont come out of function
    myName = 'infotech';
    console.log(myName);
    var teach1='harry'; 
    console.log(teach1);
}

sayName()
// console.log(teach1);
console.log(myName)

let myAge = 210;

if(1){
    
    let myAge = 20;
    const myNation = 'india';
    console.log(myAge);
    console.log(myNation);
    console.log(myName);
}


// console.log(myAge)
// console.log(myNation)

var items  = [1,2,3,4];

for(var item of items){
    console.log(item);
}



console.log(name.length); // property
console.log(name.toUpperCase()); // method


// ---------------IMMUTABLE-----------------

// Primitive Data types(copy by value)
// values which cannot be altered ex: strings, numbers, boolean, null, undefined

var person5 = 'JP'; // 1ex2001

var person6 = person5; // 1ex3001 copied 'JP';


// ---------------MUTABLE-----------------

// Reference Data types (copy by reference)
// values which can be altered ex: arrays, objects;


//object
var user = { name: 'harish'} // 1R1000
user.name = 'HARI'
user.age = 10
console.log(user.name)
console.log(user.age)

console.log(user)



var newUser = user; // 1R1000
console.log(user)
user.age = 200;

console.log(newUser)










// TERNARY OPERATOR -- EXPRESSION
// IF and Else --- statement

var jackIsMarried = true; 

// var bonus;

// if(jackIsMarried){
//     bonus = 50000;
// }else{
//     bonus = 25000;
// }

var bonus = jackIsMarried ? 50000 : 25000

console.log(bonus)


var arr = [1, 2, 3, 4, 5]


// arr[arr.length] = 6 //add element at specific index
// arr.push(8) // add element at last 
// arr.pop() // removes element of last index
// arr.unshift(0) // adds element at the beginning
// arr.shift() // removes element of first index
console.log(arr)

var obj = { name: 'SHASHANK' } 

console.log(obj)

function getTotalAmount(bill){ // function declaration
    var tip = bill * 0.10
    var total = tip + bill;
    return total
}


var totalAmount1 = getTotalAmount(100)
var totalAmount2 = getTotalAmount(200)
var totalAmount3 = getTotalAmount(300)
console.log(totalAmount1);
console.log(totalAmount2);
console.log(totalAmount3);

const profit = totalAmount1 + totalAmount2 + totalAmount3;

console.log(profit)



// anonymous function



function func(cb){
    cb()
}


function anony(){
    console.log('this is anonymouse function')
}

func(function(){})

[1,2,3,4,5]
arr.forEach(function(ele, i, arr){
  
console.log(ele, i, arr)
})

var arr1 = [0,1,2]
var arr2 = [ ...arr1, 3,4]

var obj1 = { name: 'harish' }
var obj2 = { ...obj1, age: 10}
console.log(arr1)
console.log(arr2)
console.log(obj1)
console.log(obj2)

arr2 =['abhi','akhil','akash'];
console.log(arr2)
// for in for objects
// Object.keys
// Object.values
// Object.entries


