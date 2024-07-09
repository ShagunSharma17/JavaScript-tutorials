/*There are two ways to declare an object 
1->literal and 2->constructor{se bnega toh singleton bnega}*/

const mysym=Symbol("key 1")


//object literals, declared as KEY-VALUE pair
const jsUser={
    "full name":"SHAGUN SHARMA",
    name:"Shagun",
    age:21,
    location:"Delhi", 
    //"mysym:key1" will work as string not as symbol
    [mysym]: "valueofsymbol"//this assigns the value to above created object of symbol

}

//accessing-->
console.log(jsUser.age);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
//doubt-> console.log(jsUser.mysym);//this returns undefined 
console.log(jsUser[mysym]);//this returns assigned value of mysym


jsUser.age=20//overwriting values
console.log(jsUser);


//locking values-->freezing that object-->would not produce any error
//Object.freeze(jsUser);
jsUser.age=19
console.log(jsUser);



//adding a function
jsUser.greeting = function(){
    console.log("hello--this is jsUser object with a function to access");
}
console.log(jsUser.greeting);//returns the reference of function [Function (anonymous)]
console.log(jsUser.greeting());//returns error and says not a function because of freeze and shows undefined when unfreezed


//jsUser object ke andar jo name hai usse reference krna hai toh--

jsUser.anotherGreeting =function(){
    console.log(`THIS IS ANOTHER FUNCTION WITH THIS KEYWORD, ${this.name}`);
} 
console.log(jsUser.anotherGreeting());