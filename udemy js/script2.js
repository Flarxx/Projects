/*
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool

console.log(options);

for (let key in options) {
    console.log('svoistvo ' + key + ' imeet znacenie ' + options[key])
}
console.log(Object.keys(options).length);
*/

// let arr = ["fist", 2, 3, "four", 5];
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// arr.forEach(function (item, i, array) {
// console.log(i + ' : ' + item + " (array: " + array + " )")
// });

// let mass = [1, 3, 5, 7, 9]

// for(let key in mass) {
//     console.log(key + " = " + mass[key]);
// }

// for(let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aaa", "zzz", "sss"];
// let i = arr.join(', ');

// console.log(i);

let arr = [1, 12, 5];
let i = arr.sort(cnum);

function cnum (a,b){
return a-b;
};

console.log(arr);