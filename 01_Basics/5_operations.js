let value=10
let negative=-2
console.log(value + negative);
console.log(value - negative);
console.log(value * negative);
console.log(value / negative);
console.log(value ** negative);
console.log(value % negative);



let st1="shagun"
let st2=" sharma"
console.log(st1+st2);
let test1=st1+"1"
console.log(test1,"type--",typeof(test1));
let test2=st1+1
console.log(test2,"type--",typeof(test2));
let test3=1+st1
console.log(test3,"type--",typeof(test3));

//various tests

console.table([
    {test: '"1"+2', ans: "1"+2},
    {test: '1+"2"', ans: 1+"2"},
    {test: '"1"+"2"', ans: "1"+"2"},
    {test: '"1"+2+2', ans: "1"+2+2},
    {test: '1+"2"+2', ans: 1+"2"+2},
    {test: '1+2+"2"', ans: 1+2+"2"}


  ]);


console.log(+true);//1
console.log(+"");//0

counter=100;
counter++
console.log(counter);
++counter
console.log(counter);

//post-increment--increases the value of a variable by 1 after using its value.
len=90
final_len=len++
console.log(len);
console.log(final_len);
//pre-increment--increases the value of a variable by 1 before using its value. 
leng=90
final_leng=++leng
console.log(leng);
console.log(final_leng);






//comparison
console.table([
{Operator:'>', Example:'2>1', Output:2>1 },
{Operator:'<', Example:'2<1', Output:2<1 },
{Operator:'>=', Example:'2>=1', Output:2>=1 },
{Operator:'<=', Example:'2<=1', Output:2<=1 },
{Operator:'==', Example:'2==1', Output:2==1 },
{Operator:'!=', Example:'2!=1', Output:2!=1 }
])




//== and ===(strict check)
console.table([
    {Operator:'==', Example:'2==1', Output:2==1 },//false
    {Operator:'==', Example:'2==2', Output:2==2 },//true
    {Operator:'==', Example:'2=="1"', Output:2=="1" },//false
    {Operator:'==', Example:'2=="2"', Output:2=="2" },//true because it doesn't checks the datatype


    {Operator:'===', Example:'2===1', Output:2===1 },//false
    {Operator:'===', Example:'2===2', Output:2===2},//true
    {Operator:'===', Example:'2==="1"', Output:2==="1" },//false
    {Operator:'===', Example:'2==="2"', Output:2==="2"}//false because it checks the datatype also

   


])





console.log(0==null);//false
console.log(0===null);//false
console.log(0==undefined);//false
console.log(0===undefined);//false
console.log(0>null);//false
console.log(0<null);//false

/*
== or ===(equality check) work differently than >,<,<=,>= (comparisons)
comparisons convert null to a number, treating it as  a 0
hence null>=0 or 0<=null is being treated as 0==0
whereas 0>null is not being converted to 0 hence output is false


undefined doesn't follow these rules

*/

console.log(0>null);//false
console.log(0<null);//false
console.log(0>=null);//true
console.log(0<=null);//true

