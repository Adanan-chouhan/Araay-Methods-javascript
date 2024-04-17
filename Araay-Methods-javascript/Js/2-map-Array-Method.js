const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
    // return value * 2;
    return value * index;
}
console.log(numbersDouble);


// Array in object map method use
const product = [
    {
        name: "laptop",
        price: 1000,
        count: 5
    }, {
        name: "desktop",
        price: 1500,
        count: 2
    }, {
        name: "phone",
        price: 500,
        count: 10
    }
];

// const totalProductValue = product.map(item => item.price * item.count);
const totalProductValue = product.map(item => ({
    name: item.name,
    totalValue: item.price * item.count,
}));
console.log(totalProductValue);

// string convert to number
const str = ["1","2","3","4","5"];
const number = str.map(Number);
console.log(number);


