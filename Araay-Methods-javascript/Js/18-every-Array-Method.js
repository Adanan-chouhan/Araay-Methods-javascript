const numbers = [1, 2, 3, 4, 5];

const res = numbers.every(isPositive);

function isPositive(item) {
    return item > 0;
}

console.log(res);

const person = [
    {
        name: "adnan"
    },
    {
        name:"arbaaz"
    },
    {
        name : "danish"
    },
    {
        surname : "chouhan"
    }
]

const re = person.every(person => person.name !== undefined);
console.log(re);


const arrys = [
    [1,2,3],
    [4,5,6],
    "123"
];
const a = arrys.every(arr => Array.isArray(arr));
console.log(a);