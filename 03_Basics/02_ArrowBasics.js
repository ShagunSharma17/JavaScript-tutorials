/*
const user={
    username:'Shagun Sharma', 
    price: 20000,

    welcomeMessage : function(){
        console.log(`Hi ${this.username} Welcome to GitHub`);//here this means current context
        console.log(this);//purre object ka context lega

    }
}


user.welcomeMessage()

user.username='Shagun'//change in context
user.welcomeMessage()//aab yahan changed context ke according baat hogi
console.log(this);//this has no current context but in context of browser this will return window function


function Demo(){
    console.log(this);//this would return me a lot of things-->global object
}
Demo()

function Demo1(){
    let user = "Shagun Sharma!"
    console.log(this);//this would return me a lot of things-->global object
    console.log(this.user);
//this returns me "undefined" because in "this" inside the Demo1 function refers to the global object (window in browsers).User is a local variable inside a function it is not attached 
//by attached we mean  variable is not a property of the global object 
}





const result=function (){
    let user = "Shagun Sharma!"
    console.log(this.user);
}
result()    


const resultant=() => {
    let user = "Shagun Sharma!"
    console.log(`${user} Can you teach me?`);
}
resultant()     
/*
Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context 
(the context in which they were defined). 
This is different from regular functions, which have their own this context.
*/



/***************************************************************ARROW FUNCTION AND WAYS TO WRITE IT ******************************************************************/


const SumOfNum =(num1, num2) =>{
    let num3= num1+num2
    console.log(num3);
}

SumOfNum(3,4)


const SumOfNum1 =(num1, num2) =>{
   return num1+num2
}

console.log(SumOfNum1(3,5));

const SumOfNum2 =(num1, num2) =>(num1+num2)
 
 console.log(SumOfNum2(4,5)) 
 console.log(SumOfNum2("Shagun"," Sharma"));