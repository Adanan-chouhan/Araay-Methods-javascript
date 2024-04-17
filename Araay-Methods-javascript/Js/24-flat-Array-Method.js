const arr = [1, [2, [3, [4, [5]]]]];

// [1, 2, 3, 4, 5];

const res = arr.flat();
// const res = arr.flat(3);
// const res = arr.flat(Infinity);

console.log(res);