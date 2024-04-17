const number = [1, 2, 3, 4, 5];

let sum = 0;

number.forEach(consoleItem);

function consoleItem(item, index, arr) {
    console.log(item);
    console.log("a[" + index + "] = " + item);
    console.log(arr);
}

number.forEach(item => {
    sum += item;
})

console.log(sum);

const letters = ["a","b","a","b","c","d","a"];

let count = {};

letters.forEach(item =>{
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
});

console.log(count);
