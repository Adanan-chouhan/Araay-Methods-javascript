// fill mrthod use array in values fill other value

const numbers = [1, 2, 3, 4, 5];
// const num = numbers.fill(0);
const num = numbers.fill(0, 1, 4);

console.log(num);

// examole in function
function fillInNumbers(n) {
    return Array(n)
        .fill(0)
        .map(( _,idx) => idx + 1);
}

console.log(fillInNumbers(10));