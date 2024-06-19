/*
Initially we didn't have many properties which we have now, hence the developers didn't want the end-user to be confused, 
therefore for implementing ONLY NEW JAVASCRIPT we use 
"USE STRICT"
*/


"use strict"
//alert("pops up") works in browsers

let name="Shagun Sharma"
let age=21
let isLoggedIn=false

console.table([typeof(name),typeof(age),typeof(isLoggedIn)]);


//undefined---i have defined a variable but haven't given any value to it as of now
//null---representation of empty value  for ex-- i have a server which fetches the temperature, say this server is not working hence i would prefer 'null' as an output 
//as compared to 0 as 0 degree/far is a defined temperature

let user;
let temp = null; // In JavaScript, null is treated as an object.
let num = 123e5;
let big = 999999999999999n;
const sym = Symbol('greet');

console.table([
  {variable: 'user', type: typeof(user)},
  {variable: 'temp', type: typeof(temp)},
  {variable: 'num', type: typeof(num)},
  {variable: 'big', type: typeof(big)},
  {variable: 'sym', type: typeof(sym)}
]);

// Object:
const person = {name:"shagun", surname:"sharma"};

// Array object:
const cars = ["BMW", "Mercedes", "Audi"];

// Date object:
const date = new Date("2024-06-19");



console.table([
    {variable: 'person', type: typeof(person)},
    {variable: 'cars', type: typeof(cars)},
    {variable: 'date', type: typeof(date)},
  ]);




  /*OVERALL SUMMARY--
  WE HAVE CLASSIFIED TWO TYPES OF DATATYPES IN JS
                   /                                     \
                  primitive                              reference
     /      |        |      |         |        \           /    \
 number  string    null   undefined  bigint  boolean    array   object
 

 number -- any decimal,integer, exponential(123e5)
 string 
 bigint -- any number too much bigger than the range specified
 boolean
 undefined-- variable exists but isn't pointing to anyone
 null --the value in existence is null
 object --primarily used to store data as key-value pairs. However, they have other features
 array
           
  */