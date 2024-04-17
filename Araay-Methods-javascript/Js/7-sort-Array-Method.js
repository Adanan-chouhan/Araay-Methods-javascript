// sort() Method use to array values sort
const names = ["fayyaj","danis","adnan","mujahid","arbaaz","suleman"];
names.sort();
console.log(names);


const numbers = [10,18,5,15,2,9,20,67,1,30];
numbers.sort();
console.log(numbers);


const products = [{
    name : "laptop",
    price : 1000
}, {
    name : "desktop",
    price : 1500
}, {
    name : "phone",
    price : 500 
}
];

products.sort((a,b) =>{
    return b.price - a.price;
});
// products.sort((a,b) => b.price - a.price);


console.log(products);
