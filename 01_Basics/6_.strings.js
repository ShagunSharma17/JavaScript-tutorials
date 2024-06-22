let user="GitHub-User"
let name="Shagun"
let lname="Sharma"
console.log("Welcome "+user);
/*rather concatinating, we use backticks for string interpolation

How is string interpolation different from string formatting
String interpolation--involves embedding expressions and we can change them on the go
whereas String formatting--concatenating strings and variables 
using operators or methods. */




console.log(`This repository is created by ${name}`);

let repositoryName= new String('JAVA-SCRIPT');
console.log(repositoryName);
console.log(`The name of repository is ${repositoryName}`);
/*
If both the ways of defining a string are same then what is the difference
when let repositoryName= new String('JAVASCRIPT BASICS!'); is being run in browser then we can see output
String {'Javascript'}
0: "J"
1: "a"
2: "v"
3: "a"
4: "s"
5: "c"
6: "r"
7: "i"
8: "p"
9: "t"
length: 10
[[Prototype]]: String//gives a lot of methods like charAt etc..
[[PrimitiveValue]]: "Javascript" 

here, 0,1.. are not indexes but are key value pairs*/




console.log(repositoryName[8]);
console.log(repositoryName.__proto__);

console.log(repositoryName.length);
console.log(repositoryName.charAt(4));
console.log(repositoryName.indexOf('J'));
console.log(repositoryName.indexOf('B'));//doesn't exsits hence returns -1



//substring in js
let substrings= repositoryName.substring(0, 4) //prints 4-1
console.log(substrings);

//slice
let sliceope= repositoryName.slice(-10, -3) //takes negative inputs
console.log(sliceope);

//split
let places="rishikesh himachal himalayas odisa kerela"
let spliteope= places.split('i') //divides string into array based on '-' and doesn't iclude ' '
console.log(spliteope);


let str='          hello world                '
console.log(str);
console.log(str.trim());
console.log((str.trim()).replace('h','H'));


console.log(Number(str.includes('she')));