/*
QUESTION--  If we already had var then why was there a need of let?

Variables declared with var are function-scoped or globally scoped if declared outside any function. 
This means they are accessible throughout the function or globally, which can lead to accidental variable leaks 
and unintended reassignments.
*/

const id=01
let mail="mca23.shagunsharma@bvicam.in"
var password="12345"
city="Pune"



//this is the case of undefined
let state; //in case we don't know the initial state of the user

//id=90  throws error
console.log(id);

mail="mca23.shagunsharma@gmail.com"
console.log(mail);

password=678910
city="Bihar"
console.table([id,mail,password,city,state])