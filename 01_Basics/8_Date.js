//calculated from January 1,1970


let myDate=new Date();
console.log(myDate);


/*
2024-07-01:     The date (Year-Month-Day)
T:              The letter 'T' separates the date from the time
18:34:31.524:   The time (Hours:Minutes:Milliseconds)

Z:               The 'Z' indicates that the time is in Coordinated Universal Time 
*/

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());



//self declaration of date
let myCreatedDate = new Date(2024, 6, 12,5,6);//year-month-date
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());


let formatDate= new Date("02-07-2024");//mm-dd-yyyy
console.log(formatDate.toDateString());


let timestamp= Date.now()
console.log(timestamp);//millisecond

let newDate=new Date();
console.log(newDate.getFullYear());

console.log(newDate.getDay());//starts from 0


let Date1=new Date();
console.log(Date1.toLocaleString('default',{  //defining an object
    weekday: "long"

}))


console.log(Date1.toLocaleString('default',{  //defining an object
    weekday: "narrow"

}))

console.log(Date1.toLocaleString('default',{  //defining an object
    weekday: "short"

}))