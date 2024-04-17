const names = ["adnan","arbaaz","suleman"];
const res = names.find(findArbaaz);

function findArbaaz(item){
    return item === "arbaaz";
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

const check = person.find(findAdnan);

function findAdnan(person){
    return person.name === "adnan";
}

console.log(check);