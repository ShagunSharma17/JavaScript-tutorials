let score="21"
console.log("initially-",typeof(score));

console.log("after conversion-",typeof(Number(score)));


let age="21b"
console.log(age,"got converted into ")
console.log((Number(age)))//here it is NaN i.e not a number 
console.log(typeof(Number(age)));


let n=null
console.log(n,"got converted into ")
console.log((Number(n)))//here it is 0
console.log(typeof(Number(n)));




/*
"33"->number 33
"33ABC"->NaN but type is still a number
true->1
null->number 0
undefined->NaN
NaN->remains NaN
*/



let login=NaN
console.log(Boolean(login));


/*
1-> true
""->false
"1/2/3/4/5/shagun"->true
null/undefined/NaN->false
 */




