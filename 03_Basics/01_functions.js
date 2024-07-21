function Number() {
        for(let i=0;i<=12;i++){

    //        console.log(i);
        }
    }
//Number()

function AddTwoNums(a, b) {
    function display() {
  //      console.log(a + b);
    }
    display();
} 

const sum=AddTwoNums(3,7);
//AddTwoNums(3,null);
//AddTwoNums(3,undefined);
//AddTwoNums(3,NaN);
let Concat=AddTwoNums("shagun","-sharma");
//console.log(Concat);//this will result in undefined because
//console.log(sum);//the function doesn't return any value yet


function PrintName(){
    let FirstName="SHAGUN"
    let LastName="  SHARMA"
    return FirstName+LastName
}

const fname=PrintName();
console.log(fname);