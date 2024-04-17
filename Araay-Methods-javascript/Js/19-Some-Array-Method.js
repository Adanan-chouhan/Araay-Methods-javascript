const numbers = [1, 2, 3, 4, 5];
const res = numbers.some(greaterThanFour);

function greaterThanFour(item) {
    return item > 4;
}

console.log(res);


const person = [
    {
        name:"adnan",
        age : 20 
    },
    {
        name : "arbaaz",
        age : 17
    },
    {
        name : "mujahid",
        age : 22
    }
];

const adult = person.some(isAdult);

function isAdult(person){
    return person.age >= 18;
}

console.log(adult);

const num = [9,1,8,5,4,2];

const obj = 
    {
name : "value"
    };


const hasFive = num.some(function(value){
    console.log(this);
    return value === 5;
} ,obj);

// console.log(hasFive);