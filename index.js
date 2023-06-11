// 1. Ways to print in JavaScript
// // console.log("Hello World")
// // alert("me")
// // document.write("this is a document write")

// 2. JavaScript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are variables? -  Containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// Number
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a String";
var str2 = "This is also a string";

// Objects 
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a)

// Undefined
// var und = undefined
var und;
// console.log(und);

var n = null
// console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Premitive data types: undefined, null, number, string, boolean, symbol
1. Reference data types: Arrays and Objects
*/

// var arr = [1,2,3,4,5,6]
// console.log(arr)

// Operators in JavaScript
// Arrithmetic operators
var a = 100;
var b = 10;
// console.log ("The value of a + b is ", a+b );
// console.log ("The value of a - b is ", a-b );
// console.log ("The value of a * b is ", a*b );
// console.log ("The value of a / b is ", a/b );
// Assignment operators
var c = b;
// c += 2;
// c *= 2
// console.log(c);.

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logicals Operators
// and operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// or operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// not operator
// console.log(!true);
// console.log(!false);


// functions in JavaScript
function avg (a, b){
    c = (a + b)/2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2)

// Conditionals in JavaScript
var age = 34;
// Single if statement
// if (age > 8){
//     console.log("You are not a kid");
// }
// if - else statement
// if (age > 8){
//     console.log("You are not a kid");
// }
// else {
//     console.log("You are a kid");
// }

// if - else Ladder
// if(age > 32){
//     console.log("You are not a kid");
// }
// else if (age > 26) {
//     console.log("Bachhe nahi rahe");
// }
// else if(age > 22){
//     console.log("Bachhe nahi rahe")
// }

// var arr = [1,2,3,4,5,6,7]
// for(var i=0;i<arr.length; i++){
//     console.log(arr[i])
//     } 
    
// arr.forEach(function(element) {
//     console.log(element)
//     })

// let j = 0;
// while(j<arr.length){
    // console.log(arr[j]);
    // j++;
    // }
    
    // let j = 0;
// do{
//     console.log(arr[j])
// }while(j < arr.length);
    

// let myArr = ["Fan", "Camera", 34, null, true];
// // Array methods
//     console.log(myArr.length);
//     // myArr.pop();
//     // myArr.push("Harry")
//     // myArr.shift()
//     // myArr.unshift("harry")
//     // const newLen = newArr.unshift("Harry")
//     console.log(newLen)
//     console.log(myArr)


// String Methods in JavaScript
 let myLovelyString = "Harry is a good boy";
//  console.log(myLovelyString.length)
//  console.log(myLovelyString.indexOf("Harry"))
//  console.log(myLovelyString.lastIndexOf("boy"))
//  console.log(myLovelyString.slice(1,4))
// d = myLovelyString.replace("harry", "rohan" );
// console.log(d, myLovelyString)


let myDate = new Date();
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())


// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// Events in JavaScript
// function clicked() {
//     console.log('The button was clicked')
// }
// firstContainer.addEventListener("click", function(){
//     console.log("Click hua")
// })
// firstContainer.addEventListener("mouseover", function(){
//     console.log("Mouse on Container")
// })
// firstContainer.addEventListener("mouseout", function(){
//     console.log("Mouse out of Container")
// })

// Arrow Functions
// let a = 10;
// let b = 20;
// sum = (a,b)=> {
//     return a+b
// }

// setTimeout and setInterval  
// logkaro = () => {
//     console.log("I am your log")
// }
// setTimeout(logkaro, 2000);



// JavaScript localStorage
// localStorage.setItem('name', 'harry')
// localStorage
// Storage {name: "Harry", length:1}
// localStorage.getItem('name')
// localStorage.clear()
//Json
// obj = {name:"harry", length:1, a: {this:'tha"t'}}
// js = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name": "harry", "length":1, "a":{"this": "that"}}`);
// console.log(parsed)





// JavaScript Data Structure 
// Arrays
// const arr = [1, 2, 3, 'Vishwas']
// arr.push(4);
// arr.unshift(0)
// arr.pop();
// arr.shift()

// for(const item of arr) {
//     console.log(item)
// }


//Objects
const obj = {
    name: "Bruce",
    age:"25",
    "key-three": true,
    sayMyName:function() {
        console.log(this.name)
    }
}
obj.hobby == 'football'
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()






