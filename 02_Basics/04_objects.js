//singleton objects
const userInfo = new Object();
//const userInfo={}--> this is not a singleton object
userInfo.id="123abc"
userInfo.name="Shagun"
userInfo.isLoggedIn="false"

//nested objects
const regularUser={
        email : "example@gmail.com",
        fullname: {
            firstname :"Some",
            lastname :"One"
        }


}



// console.log(userInfo);
// console.log(regularUser);

//fetching nested objects
// console.log(regularUser.fullname.firstname);

const obj1={1: "hello", 2:"world"}
const obj2={3:"how",4:"are",5:"you"}

//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

console.log(obj3);