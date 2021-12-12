console.log('hello world');
console.error('abhi');
console.warn('warning abhi')
document.write("Hello World <br/>");
alert("heyyy hii");
// var(globally scoped) let and const

var kname ="abhilash.GUJJETI";
var boolean1=true;
var x=35.9 ;
const a=20;
const null1=null;
const undef1=undefined;
let noname;

//String, number,boolean,null ,undefined
console.log(typeof kname);
console.log(typeof boolean1);
console.log(typeof x);
console.log(typeof a);
console.log(typeof null1);
console.log(typeof undef1);
console.log(typeof noname);
console.log(a);
let b=40;
b=20;
console.log(b);
var c=a+b;
console.log(c);
let s="abhi, btech, jntuhcej, 2018";
let p=["abhi"," btech"," jntuhcej"," 2018"];


//string properties and methods
console.log(kname.length );
console.log(kname.toUpperCase() );
console.log(kname.substring(0,4));
console.log(s.split(","));
console.log(kname.substring(0,4).toUpperCase() );
console.log(a)
console.log(b)
console.log(p[1]);
console.log("abhi")
//concatenation

console.log("my name is "+ kname +"and i am aged"+ x );

//template string/literals

console.log(`my name is ${kname} and i am aged ${a}`);
const hello= `my name is ${kname} and i am aged ${x}`;
console.log(hello);



// Arrays variables that hold multiple values of different data types //arrays are zero based

var num1=new Array(1,11,111,1111,11111); //after new it is called a cnstructor
console.log(num1);

const fruits=['apples', 'oranges', 'pears', 10 ,true]
//javascript is not statistically tyoed u need not assign the datatype
// can add values ,manipulate and use methods but cant reassign 
fruits[6]=30;
console.log(fruits);

// accessing array elements
console.log(fruits[1]);

//add at end
fruits.push('mangoes');
console.log(fruits);


//remove at end
fruits.pop();
console.log(fruits);

//add at begining
fruits.unshift('strawberries'); 
console.log(fruits);

// remove at beginning
fruits.shift();
console.log(fruits);

//to check whether it is an array
console.log(Array.isArray(fruits));

//index of an array element
console.log(fruits.indexOf('pears'));


//object literals: key value pairs
const person=
{
    firstName:'abhilash',
    lastName:'GUJJETI',
    age:30,
    hobbies:['music','cricket','movies','sports'],
    address:{
        street:'50 down st',
        city:'bomabay',
        state:'maharastra'
    }

}
console.log(person);
console.log(person.firstName,person.age);
console.log(person.hobbies[2]);
console.log(person.address.city);

//pulling things out 
const {lastName , age,address:{city}} =person;
console.log(lastName);
console.log(city);

//add keyvalue pair
person.email= 'abhilash@gmail.com';
console.log(person);


//Arrays of objects
const todos=[
    {
        id:1,
        text:'take out trash',
        isCompleted:true
    }
    ,{
        id:2,
        text:'meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'detist opnt',
        isCompleted:false
    }
]
console.log(todos);
console.log(todos[1].text);

//JSON data format while using api send and receiving apis
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//for
for(let i=0;i<=10;i++){
    console.log(i);
}

//while   ---- will run untill the condition is true
let i=0;//set value outside the loop
while(i<=10){
    console.log(`squaring of given ${i} is ${i*i}`);
    i++;
}

//for..off
for(let don of todos){
console.log(don.id)
}

//do-while
i=0;
do{
    console.log(`cubeof given number ${i} is ${i*i*i}`);
    i++;
}while(i<=10);


//forEach------------just loops through array

todos.forEach(function(todo){
  
    console.log(todo.text)
    })

//map----------to create a new array from an array   
    const todoComplete=todos.map(function(todo){
        return todo.isCompleted;
        })
        console.log(todoComplete)
    
//filter---------------to create a new array based on conditions
    const todois=todos.filter(function(todo){
        return todo.isCompleted===true;
        }).map(function(todo){              //chain on other array methods
            return todo.text;
            })
            
        console.log(todois)
    
//CONDITIONLS
//if
        const q = 10; //== need not match datatype just value is enough i.e datatype is igored
        if(q == 10){
            console.log('BALAYYA AKHANDA')
        }else{
            console.log('ALLU ARJUNS PUSHPA')
        }

        const r = '10'; 
        if(r == 10){
            console.log('BALAYYA AKHANDA')
        }else if(r>10){
            console.log('ALLU ARJUNS PUSHPA')
        }else{
            console.log('balayya balayya')
        }
        
        const t = 10; /// === should match the datatype too 
        if(t === 10){
            console.log('ALLU ARJUNS PUSHPA')
        }else{
            console.log('RRR')
        }



//or and xor

        const ab =12;
        const ac=11;
        if(ab>11 || ac<5){
            console.log('ab is greater than 11 or ac is equal to 11')
        }else{
            console.log('ab is not greater than 11 and ac not is equal to 11')
        }
        
      
        if(ab>11 && ac<5){
            console.log('ab is greater than 11 and ac is equal to 11')
        }else{
            console.log('ab is not greater than 11 or ac is not equal to 11')
        }
       
       //ternary operator
        const color = ab > 10 ? 'red':'blue'  
        console.log(color)
//switch 
switch(color){
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:  console.log('color is not red or blue')
    }

//functions
function addNum(num1,num2){
    console.log(num1+num2);
}addNum(5,6)

function subNum(num1,num2){
    console.log(num1-num2); 
}subNum()//returns NaN

function subNum(num1=1,num2=3){
    console.log(num1-num2); 
}subNum()

function mulNum(num1,num2){                 //function usually returns a value
   return num1*num2;
}console.log(mulNum(5,6));

//ARROW FUCTIONS
// const arfun= (num1,num2) => {
//    return num1/num2; 
// }
// console.log(arfun(12,6));

// const arfun= (num1,num2) =>  num1/num2 ; //type2 no need to return
//  console.log(arfun(32,6));

//  const arfun= (num1,num2) =>   console.log(num1/num2); //type3
// arfun(48,6);

 const arfun= num1 =>   console.log(num1+5); //type4
arfun(48);


// todos.forEach((todo)=>console.log(todo));//using forEach in arrow functions





//lexical.this
// OOP
//constructor function
// function Person(firstName, lastName, dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
//     // this.getFullYear=function(){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName=function(){
//     //     return `${this.firstName}${this.lastName}`;
//     // }
// }
// //prototypes
// Person.prototype.getFullName=function(){
//     return `${this.firstName}${this.lastName}`;
// }
// Person.prototype.getFullYear=function(){
//     return this.dob.getFullYear();
// }
//class in ES6
class Person{
    constructor(firstName, lastName, dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }
    getFullName=function(){
        return `${this.firstName}${this.lastName}`;
    }
   getFullYear=function(){
        return this.dob.getFullYear();
    }
}

//instantiate object
const person1=new Person('abhilash','gujjeti','8-13-1996');
const person2=new Person('harish','ponna','2-22-1995');
console.log(person1);
console.log(person1.dob);
console.log(person1.dob.getFullYear());
console.log(person1.getFullName());
console.log(person1.getFullYear());

console.log(person2);
console.log(person2.getFullName());
console.log(person2.getFullYear());



//dom
// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));//html collection

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput1 = document.querySelector('#name1');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}