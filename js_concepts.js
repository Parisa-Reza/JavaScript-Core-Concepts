// JavaScript is a high-level, single-threaded language that is interpreted but JIT-compiled at runtime, dynamically typed, and synchronous by default but can handle asynchronous operations via the event loop.

// 1. How JavaScript runs in the browser:

// JavaScript code is executed by the browser’s JavaScript engine (like V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari).

// The engine parses, interprets, and JIT-compiles the JS code to machine code.

// The event loop manages asynchronous tasks (timers, DOM events, network requests).




// callback function and arrow function

function operate(a,b,callback)
{
    return res=callback(a,b);
}

const add=(a,b)=> a+b;
const sub=(a,b) => a-b;
const div=(a,b)=> a/b;
const multi =(a,b)=> a*b;



console.log(operate(12,2,add));

console.log(operate(12,2,sub));

console.log(operate(12,2,div));

console.log(operate(12,2,multi));


// map and foreach

const a= [2,3,4,5,6,7];

const b=a.map((item)=>item*2);

console.log(a) 
console.log(b) // b kintu notun ekta list

a.forEach((item)=>
    console.log(`item is ${item}`)
)





// promise and asynchromous function


const asyncFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data");
      resolve("success");
    }, 5000);
  });
};

let p1=asyncFunc();
p1.then((res)=>{
console.log(res) /// success
})

/// more example



const asyncFunc1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data1");
    }, 4000);
  });
};

const asyncFunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {;
      resolve("data2");
    }, 4000);
  });
};

console.log("fetching data1");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("fetching data2");
  asyncFunc2().then((res) => {
    console.log(res);
  });
});


/////////////////////////////////////////////////////
// call back function
//example 1
    const fn1 = (a, callback) => {
      res = a + 1;
      callback(res);
    };

    const cb_test = (result) => {
      console.log(result);
    };
    fn1(2, cb_test);

// example 2

const greet =(name, callback)=>{
  callback(name)

}
const salutation= (name)=>{
  console.log(" goodmorning "+ name) // this dile kaj korbe na
}
greet("parisa",salutation)
// op => goodmorning parisa


const x =9;
// a=8 cannot redeclare


const y= [1,2,3,4,5]
y.push(0)
console.log(y)
//op  [1, 2, 3, 4, 5, 0]


const person={
    name : "parissa"
}
person.age= 90
console.log(person)
//op {name: 'parissa', age: 90}


// string in js is immutable uncliek c++
let str = "hello";
str[0] = "H";

console.log(str); // "hello"



// inserting one object to another, this is not copy....the reference is shared

const person ={
    name : "messi",
}

person.age=34

// person
// {name: 'messi', age: 34}

const person2=person
// person2
// {name: 'messi', age: 34}
person2.age=90

// person2
// {name: 'messi', age: 90}
// person
// {name: 'messi', age: 90}


// cloning and referencing

// shallow clone
const person1={
    name : "messi",
    age: 55,
    address:{
        city : "dhaka",
        code : 1216
    }
}

const person2={...person1}

// person2
// {name: 'messi', age: 55, address: {…}}address: {city: 'dhaka', code: 1216}age: 55name: "messi"[[Prototype]]: Object
person1.name="ronlado"

// person1
// {name: 'ronlado', age: 55, address: {…}}
// person2
// {name: 'messi', age: 55, address: {…}}

person1.address.code=20000

// person1
// {name: 'ronlado', age: 55, address: {…}}address: {city: 'dhaka', code: 20000}age: 55name: "ronlado"[[Prototype]]: Object
// person2
// {name: 'messi', age: 55, address: {…}}address: {city: 'dhaka', code: 20000}age: 55name: "messi"[[Prototype]]: Object

//perosn1 and person2 address code are holding same reference ....... the nested object is not copied yet...rather referefence been shared here



// deep clone
const person3 =structuredClone(person1)

person1.address.code=9000

// person1
// {name: 'ronlado', age: 55, address: {…}}address: {city: 'dhaka', code: 9000}age: 55name: "ronlado"[[Prototype]]: Object
// person2
// {name: 'messi', age: 55, address: {…}}address: {city: 'dhaka', code: 9000}age: 55name: "messi"[[Prototype]]: Object
// person3
// {name: 'ronlado', age: 55, address: {…}}address: {city: 'dhaka', code: 20000}age: 55name: "ronlado"[[Prototype]]: Object

// person1 and person2 are shallow cloned , person1 and person3 are deep cloned 

// extracting values from an object (nested )
const {age,
       address: {code}}=person3
// age
// 55
// code
// 20000







// this keyword

//in browser this is a window Object
// this keyword inside and outside are same both in normal and arrow function in both browser and node.js

function checkThis(self) {
    console.log(self===this)
}
checkThis(this)
//true

// this keyword inside and outside are not same object
const person = {
 fname : "Parisa",
 lname : "Reza",
 fullname :function (self){
     console.log(self===this)
     console.log(this)
    return this.fname+ this.lname
}
}
person.fullname(this)

// VM3415:5 false
// VM3415:6 {fname: 'Parisa', lname: 'Reza', fullname: ƒ}fname: "Parisa"fullname: ƒ (self)lname: "Reza"[[Prototype]]: Object
// 'ParisaReza'


//static member in a class is shared by all the objects of that specific class. static memver is called with the name of the class
// use case : we can tack how many objects have been created


//class object constructor nad static

class userInfo{
static count=0 ;
constructor(fname,lname,city,country){
    this.fname=fname;
    this.lname=lname;
    this.address={city,country}
     userInfo.count=userInfo.count+1;
}

    static getCounter(){
        return count;
    }

    get info(){
        return this.fname +' ' + this.lname +' '+ this.address.city +' '+ this.address.country;
    }

     get_info(){
        return this.fname +' '+ this.lname +' '+ this.address.city +' '+ this.address.country;
    }
}

const person_1 = new userInfo("pari","rexa", "dhaka","bangladesh");
const person_2 = new userInfo("messi","lionel", "dhaka","bangladesh");
const person_3 = new userInfo("cr7","siuu", "dhaka","bangladesh");

console.log(person_2.info)
console.log(person_1.get_info())
console.log(userInfo.count)

// VM4406:27 messi lionel dhaka bangladesh
// VM4406:28 pari rexa dhaka bangladesh
// VM4406:29 3



// in nested function the global and the immidiate this will vary
function checkThis1 (thisVar){
    console.log(thisVar)
    const self=this
    function checkThis2 (self,thisVar){
       console.log("immidiate",(this===self)) 
          console.log("global",(this===thisVar)) 
    }
    checkThis2(self);
}

checkThis1(this)

// VM4836:2 Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// VM4836:5 immidiate true
// VM4836:6 global false


// A closure is when a function remembers variables from its outer scope, even after the outer function has finished executing.


function outer(){
    let count =0;
    function  inner() {
      count=count+1;
        console.log(count)
    }
    return inner
}

const res=outer()
res()
res()
res()
// VM5102:5 1
// VM5102:5 2
// VM5102:5 3

// outer() is called.
// count is created in outer’s scope.
// inner() is returned.
// outer() finishes execution ❌ (normally scope should die).
// counter() is called.
// inner() still remembers count.
// count increases on every call.
// 👉 This “remembering” is closure.


// array or list methods in js
const cartoon = ["shinchan", "doraemon", "hattori", "amara"]
cartoon.forEach((cartoon,index)=>{
    console.log(`character ${index+1} : ${cartoon}`)
})
// VM5786:2 character 1 : shinchan
// VM5786:2 character 2 : doraemon
// VM5786:2 character 3 : hattori
// VM5786:2 character 4 : amara


// OR without {} and return which is implicit return
// map creates a new list...without afetcing the previous one
const animation=cartoon.map((cartoon,index)=>{
  return(`character ${index+1} : ${cartoon}`)}
)
console.log(animation)

// VM5967:4 (4) ['character 1 : shinchan', 'character 2 : doraemon', 'character 3 : hattori', 'character 4 : amara']



// mapping from an object list
const persons=[
    {
        name: "parisa",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    },
    {
        name: "Reza",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    },
    {
        name: "messi",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    }
]

const names= persons.map((person)=>person.name)
names
// (3) ['parisa', 'Reza', 'messi']
const city= persons.map((person)=>person.address.city)
city
//(3) ['dhaka', 'dhaka', 'dhaka']



// logical operation
const names_des = persons.map((person) => {
  if (person.name === "messi") {
    return `${person.name} (player)`;
  } else {
    return `${person.name} (mango people)`;
  }
});
names_des;
// (3) ['parisa (mango people)', 'Reza (mango people)', 'messi (player)']


// method chaining
const names_ = persons
  .map((person) => {
    if (person.name === "messi") {
      return `${person.name} (player)`;
    } else {
      return `${person.name} (mango people)`;
    }
  })
  .forEach((person) => {
    console.log(`Hi! I am ${person}`);
  });
names_
// VM6816:35 Hi! I am parisa (mango people)
// VM6816:35 Hi! I am Reza (mango people)
// VM6816:35 Hi! I am messi (player)


const __persons=[
    {
        name: "parisa",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    },
    {
        name: "Reza",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    },
    {
        name: "messi",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    }
]

__persons.push({
        name: "neymar",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    })
__persons.unshift({
        name: "pimpi",
        age: 20,
        address:{
            city: "dhaka",
            code: 1216
        }
    })

__persons.shift()
__persons.pop()

__persons
// {name: 'parisa', age: 20, address: {…}}1: {name: 'Reza', age: 20, address: {…}}2: {name: 'messi', age: 20, address: {…}}length: 3[[Prototype]]: Array(0)
// push -> insert at end
// pop -> remove from end
// unshift -> insert at beginning
// shift -> remove from beginning

// slice(start,end) excluding the end index ...it creates a new list
const list1=[2,4,5,2,4,3,4,578,44]
list1.slice(2,7)
//  [5, 2, 4, 3, 4]

//splice (p for poriborton to the original list) ...used for deleting and inserting

const _list1=[2,4,5,2,4,3,4,578,44]
const _list2 = [200,222,444]
_list1.splice(2,0,..._list2) // start index, how many items to delete , what to add
list1
// (12) [2, 4, 200, 222, 444, 5, 2, 4, 3, 4, 578, 44]
list1.splice(2,3)  // start index, how many items to delete 
list1
// (9) [2, 4, 5, 2, 4, 3, 4, 578, 44]

list1.reverse()
// (6) [44, 578, 4, 3, 4, 2,5,4,2]

persons.concat(list1)
//(9) [{…}, {…}, {…}, 44, 578, 4, 3, 4, 2]0: {name: 'parisa', age: 20, address: {…}}1: {name: 'Reza', age: 20, address: {…}}2: {name: 'messi', age: 20, address: {…}}3: 444: 5785: 46: 37: 48: 2length: 9[[Prototype]]: Array(0)

list1
// (6) [44, 578, 4, 3, 4, 2]

list1.join(';')
// '44;578;4;3;4;2'


// list1
// (6) [44, 578, 4, 3, 4, 2]
// const s1= list1.join('==')
// undefined
// s1
// '44==578==4==3==4==2'
// s1.split('==')
// (6) ['44', '578', '4', '3', '4', '2']


list1
//(6) [44, 578, 4, 3, 4, 2]
list1.includes(999)
false
list1.includes(44)
true




const nestedArray=[1,2,3,4,[4,2,3,4,[3,47,2,1],67,4],55]
nestedArray.flat(2) // depth starts from 0
// (15) [1, 2, 3, 4, 4, 2, 3, 4, 3, 47, 2, 1, 67, 4, 55]0: 11: 22: 33: 44: 45: 26: 37: 48: 39: 4710: 211: 112: 6713: 414: 55length: 15[[Prototype]]: Array(0)

nestedArray.flat(1)
// (12) [1, 2, 3, 4, 4, 2, 3, 4, Array(4), 67, 4, 55]0: 11: 22: 33: 44: 45: 26: 37: 48: (4) [3, 47, 2, 1]9: 6710: 411: 55length: 12[[Prototype]]: Array(0)

persons
//(3) [{…}, {…}, {…}]0: {name: 'parisa', age: 20, address: {…}}1: {name: 'Reza', age: 20, address: {…}}2: {name: 'messi', age: 20, address: {…}}length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
persons.find((person)=>{
    if (person.name ==="messi")
    {
        return true 
    }
    return false
})

// or more shortly

persons.find((person)=>(person.name ==="messi")) // always returns the first
//{name: 'messi', age: 20, address: {…}}

persons.findIndex((person)=>(person.name ==="messi"))
// 2

// similarly findLast function


// filter => keep
const _arr=[23,4,5,1,1,2,35,6,67,3]
const newarr=_arr.filter((num)=>(num>20))
newarr
//(3) [23, 35, 67]

//some
const __arr=[23,4,5,1,1,2,35,6,67,3]
__arr.some((num)=>(num==1))
true

//every
const ___arr=[23,4,5,1,1,2,35,6,67,3]
___arr.every((num)=>(num==1))
false



// for uniqueness

const arr=[23,4,5,1,1,2,35,6,67,3]

array= new Set(arr)
//Set(9) {23, 4, 5, 1, 2, …}[[Entries]]0: 231: 42: 53: 14: 25: 356: 67: 678: 3size: 9[[Prototype]]: Set
array
//Set(9) {23, 4, 5, 1, 2, …}
array= Array.from(array)
//(9) [23, 4, 5, 1, 2, 35, 6, 67, 3]0: 231: 42: 53: 14: 25: 356: 67: 678: 3length: 9[[Prototype]]: Array(0)

// REMEMBER !!!! HERE THE NUMBERS ARE TREATED AS STRING THATSWHY NOT PROPERLY SORTED
array.sort()
//(9) [1, 2, 23, 3, 35, 4, 5, 6, 67]

array.sort((x,y)=> x>y? 1:-1)
// 9) [1, 2, 3, 4, 5, 6, 23, 35, 67]


// returns the result as reduced elements
parray=[1,2,3,50]
parray.reduce((sum,curr)=>sum+curr,0)
// 56








// difference between normal vs arrow function

// 1. arrow function has implicit return

const _add = (a, b) => a + b;

// normal function does not have
const __add = (a, b) => {
  a + b;
};
// returns undefined

// 2. arrow function doesnt have a constructor

const fun1=(name)=>{
    this.name=name
}
new fun1("Pari")
//VM10024:4 Uncaught TypeError: fun1 is not a constructor at <anonymous>:4:1(anonymous) @ VM10024:4Understand this error

function fun2(name){
    this.name=name
}
new fun2("Pari")
//fun2 {name: 'Pari'}


// 3.Arrow functions do NOT have their own this. They inherit this from the surrounding scope. 
const object2 = {
    name: "parisa",
    function2: ()=>{
      console.log(this.name)  
    }
}
object2.function2() // undefined




const object1 = {
    name: "parisa",
    function1(){
      console.log(this.name)  
    }
}
object1.function1()
//VM10254:4 parisa



// Closure

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const fn = outer();
fn(); // Hello


// Why this is a closure

// message is created inside outer

// inner() uses message

// outer() has already finished

// inner() still remembers message



// Hoisting


//Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during execution.



// // Simple Example (variable)
// console.log(a); // undefined
// var a = 10;

// //What actually happens (internally):
// var a;
// console.log(a); // undefined
// a = 10;


// So JavaScript knows a exists, but its value is assigned later.

// let and const (important)
// console.log(b); // ❌ Error
// let b = 20;

// let and const are hoisted but not initialized.
// They stay in a Temporal Dead Zone (TDZ) until declared.






// ✅ Function Declaration (hoisted)
// sayHi();

// function sayHi() {
  //   console.log("Hi");
  // }
  
  
  // ✔️ This works. The entire function is hoisted.
  
  
  
  
  // ❌ Function Expression (NOT hoisted)
  // sayHello(); // ❌ Error
  
// var sayHello = function () {
  //   console.log("Hello");
  // };
  
  // Only var sayHello is hoisted (as undefined), not the function body.
  
// Internally:

// var sayHello;
// sayHello(); // ❌ undefined is not a function





// ❌ Arrow Function (NOT hoisted)
// greet(); // ❌ Error

// const greet = () => {
  //   console.log("Hey");
  // };
  
  // Arrow functions behave like variables (let/const).
  
  // var → hoisted, value = undefined
  // let / const → hoisted, ❌ cannot use before declaration

  // function fn() {} → ✅ hoisted
  // var fn = function(){} → ❌ not hoisted
  // const fn = () => {} → ❌ not hoisted




  // event loop

  // The event loop is how JavaScript handles async tasks while being single-threaded.
  // The event loop continuously checks the call stack. When it’s empty,
  //  it executes all microtasks first, then one macrotask from the callback queue.
 //Callback / Task Queue – setTimeout(with less time will be first executed), events
 //Microtask Queue – Promise.then, queueMicrotask


//  console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");
// Output:
// 1
// 4
// 3
// 2


// Execute global synchronous code in the Call Stack

// Promises → Microtask Queue

// Timers/events → Callback (Task) Queue

// When Call Stack is empty, Event Loop runs

// Execute all microtasks (Promise queue)

// Execute one task from Callback Queue

// Repeat continuously

// macro task-> setimeout, I/O callbacks (file, network, etc.) UI rendering / repaint (browser)
// micro task -> Promise,then 



// In the macrotask queue for setTimeout, the order of execution depends on the timer expiration, not the order they appear in code.

// Smaller timeout → executes earlier

// If two timeouts expire at the same time, FIFO order matters.

// Step 4: Example to test
// setTimeout(() => console.log("B"), 30);
// setTimeout(() => console.log("D"), 0);


// Output:

// D
// B


// Even though B is written first.


// tricky one

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => console.log("D"), 0);
});

Promise.resolve().then(() => console.log("E"));

console.log("F");

// A -> F -> C -> E -> B -> D



// async await 

const url ="https://jsonplaceholder.typicode.com/posts"

const fetchDataWithAsyncAwait = async ()=>{
    try{
     const response = await fetch(url)
        const data =await response.json()
        console.log(data)  
        
    }
    catch(err){
         console.log("The promise has been  rejected", err);
    }
    finally{
         console.log("The promise has been resolved or rejected");
    }
    
}

fetchDataWithAsyncAwait()




// promise then

// const url ="https://jsonplaceholder.typicode.com/posts"


// fetch(url)
// .then((response)=>{
//    return  response.json()
    
// })
// .then((data)=>{
//    return  console.log("The data", data);
// })
// .catch((err)=>{
//     console.log("The promise has been  rejected", err);
// })
// .finally(()=>{
//      console.log("The promise has been resolved or rejected");
// })


// basic Promise template

const myNewPromise = new Promise((resolve,reject)=>{
    const name = "parisa"
    if (name==="parisa") { resolve(name)}
    else {reject()}
})

myNewPromise
    .then((name)=>console.log("fullfilled",name))
.catch(()=>console.log("not fullfilled"))
//  VM1159:8 fullfilled parisa



// callback async setTimeOut all together

const func1 =(a,b,cb)=>{

    console.log("this will execute eventually")
    setTimeout(()=>{
        const res=a+b;
        cb(res)
    },3000)
}


func1(5,6,function func2(result) {
    console.log(result)
    
})
//  this will execute eventually
//  11



// calling multiple apis parallely

// Different API URLs in separate variables
const api1 = "https://jsonplaceholder.typicode.com/posts/1";
const api2 = "https://jsonplaceholder.typicode.com/posts/2";
const api3 = "https://jsonplaceholder.typicode.com/posts/3";

// Put them in an array for easier iteration
const urls = [api1, api2, api3];

const fetchMultipleAPIs = async () => {
    try {
        // Fetch all APIs in parallel
        const results = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json()))
        );

        // Log each result
        results.forEach((data, index) => {
            console.log(`Data from API ${index + 1}:`, data);
        });
    } catch (err) {
        console.error("Error fetching data:", err);
    } finally {
        console.log("All fetch attempts finished");
    }
};

// Call the function
fetchMultipleAPIs();



// Single-threaded or multi-threaded:

// JavaScript is single-threaded. It uses the event loop to handle asynchronous tasks without blocking.

// Interpreted or compiled:

// Interpreted, but modern engines like V8 also just-in-time (JIT) compile for performance.


// Promise: An object representing the future result (success or failure) of an asynchronous operation. It helps manage async tasks without deeply nested callbacks.

// Async: A keyword that declares a function as asynchronous. It always returns a Promise.

// Await: A keyword used inside an async function to pause execution until a Promise resolves, making async code behave like synchronous code.

// Callback Hell: A situation where callbacks are nested deeply, making code hard to read, maintain, and debug, usually caused by sequential async operations.


// Callback Hell → messy, hard-to-read nested callbacks.

// Promise → cleaner than callbacks, allows chaining and separates success/failure.

// Async/Await → even cleaner than Promises, makes async code look synchronous, very readable.

// So the progression is basically: Callback → Promise → Async/Await. Each step is better for readability and maintainability.