const score=202
const balance= new Number(203)//treats as object
console.log(score)
console.log(balance);

console.log(typeof(balance.toString()));
console.log(balance.toFixed(2));//digits after point, if toFixed() by default take 0




const data1=4002.899
console.log(data1.toFixed(10));//works after decimal
console.log(data1.toPrecision(10));//works before decimal
console.log(data1.toPrecision(3));//before decimal i had 4 digits but on precision 3 was given hence the given digit is being treated as exponential

console.table(
   [
    {value: (data1),type:(typeof(data1.toFixed()))},
    {value: (data1),type:(typeof(data1.toPrecision()))}

   ]
)
const longNum=10100101010101010010101010010101010n

console.log(longNum.toLocaleString('en-UK'));//gives comma in context of Indian format






console.log(Math);
const data=787777.898998
console.log(Math.round(data));
console.log(Math.ceil(data));
console.log(Math.floor(data));


console.log(Math.random());//generates between 0 and 1
console.log(((Math.random())*10) + 1);//gives surety that value won't be 0
console.log(((Math.random())*10));//generates between 0 and 1

const min=10
const max=20
console.log((Math.floor(Math.random()*(max-min+1) +min)));

