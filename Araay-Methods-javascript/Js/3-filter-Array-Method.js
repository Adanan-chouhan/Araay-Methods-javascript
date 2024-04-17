const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven);

function isEven(value) {
    return value % 2 === 0;
}

console.log(even);


// age gretterthen 18 
const people = [{
    name: "florin",
    age: 26
}, {
    name: "Iven",
    age: 18
}, {
    name: "jai",
    age: 15
}
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);

//indexOf Method
const number = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
const nums = number.filter((value,index,arr) =>{
    return arr.indexOf(value) === index;
});

console.log(nums);