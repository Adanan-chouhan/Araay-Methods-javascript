const str = "1234567";

// [1, 2, 3, 4, 5, 6, 7,];

const res = Array.from(str);  //,mapfun //x => Number(x); //Number

// function mapfun(x){
//     return Number(x);
// }

console.log(res);

const number = [1, 2, 3, 3, 1, 4, 5, 1, 3, 4, 2];
const dublicatNum = Array.from(new Set(number));
console.log(dublicatNum);


const friends = ["adnan","arbaaz","suleman","adnan","arbaaz","suleman"];
const fr = Array.from(new Set(friends));

console.log(fr);
