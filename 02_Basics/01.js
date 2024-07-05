const myArr=[1,2,3];
console.log(myArr);

const magazine= new Array("VOGUE", "BAZZAR", "FORBES")

console.log(myArr[4]);//elements are not 4
console.log(magazine);


for(let i=0; i< myArr.length; i++){
console.log(myArr[i]);
}

//Arrays in javascript create shallow copies

/*
SHALLOW COPY -- Properties share same references.
DEEP COPY    -- Properties that do not share the same references.

*/






/*
                                        VARIOUS METHODS OF ARRAYS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
myArr.push(6,7);
console.log(myArr);//pushes at the end of the array

popped_element=myArr.pop();
console.log(myArr);
console.log("popped element-"+popped_element);


//shift unshift act as pop and push but for starting elements
myArr.unshift(10);
console.log(myArr);//pushes at the starting of the array and shifts each value

myArr.shift();
console.log(myArr);



//question based methods
console.log(typeof(myArr.includes(8)));
console.log((myArr.includes(8)));

console.log((myArr.indexOf(8)));


const newArray=myArr.join()//adds all the element of an array to a string
console.log(newArray);
console.log(myArr); //output is same but type is different


console.log(typeof(newArray));
console.log(typeof(myArr));



//splice and slice
console.log("1", myArr);
const myAr1 = myArr.slice(1,3)//returns section of array doesn't include last one and doesn't change org array
console.log("1.1 ->", myAr1);
console.log("2",myArr);


const myAr2 = myArr.splice(1,3)//includes last element too and the org array gets manipulated
console.log("1.2 ->", myAr2);
console.log("2",myArr);