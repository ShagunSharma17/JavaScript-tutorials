const actor=["Shah-Rukh Khan","Shahid Kapoor","Rajkumar Rao"];
const actress=["Deepika Padukone","Alia Bhatt","Priyanka Chopra","Rekha"];

//actor.push(actress);
// console.log(actor);
// console.log(actor[3]);//array ke andar array
// console.log(actor[3][2]);

// const filmstars=actor.concat(actress)//this method returns a new array so when i use console.log(actor); this would refer to actor array
// console.log(filmstars);

const filmstars=[...actor,...actress]//this is spread

const arr2=[1,2,3,[4,5,6],7,[6,7],[4,5]]
let usable=arr2.flat(Infinity)//depth is given as to which level it should go it can be infinity as well
console.log(usable);
console.log(arr2);


console.log(Array.isArray("shagun"));
console.log(Array.from("shagun"));//converts to array and for key value pairs it returns an empty string
console.log(Array.from({name:"shagun"}));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));