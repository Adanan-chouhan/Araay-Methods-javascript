// reduce Method only one perameter Return
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce(sum,0);// callbackFun,initialValue
function sum(accumlator,value){
return accumlator + value;
}

console.log(total);


// infinity
const num = [1, 2, 3, 4, 5, 6, 7, 8];

const max = num.reduce(callback,-Infinity);// callbackFun,initialValue

function callback(accumlator,value){
if(accumlator > value){
    return accumlator;
}else{
    return value;
}
}

console.log(max);

// array in object Example reduce Method
const store = [
    {
        name : "laptop",
        value : 1000,
        count: 3
    }, {
        name : "desktop",
        value : 1500,
        count: 4
    }, {
        name : "phone",
        value : 500,
        count: 10
    }
];

const totalValueStore = store.reduce(
    (acc,item) => acc + item.value * item.count,0
);

console.log(totalValueStore);
