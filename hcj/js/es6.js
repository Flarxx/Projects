function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}
letTest();
for (let i = 0; i < 3; i++) {
    document.write(i);
}
let name = 'David';
let msg = `Welcome ${name}!`;
console.log(msg);
let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}
let obj = {a: 1, b: 2, c: 3};
for (let v in obj) {
    console.log(v);
}
let list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}
for (let ch of "Hello") {
    console.log(ch);
}
const test = (a, b = 3, c = 42) => {
    return a + b + c;
}
console.log(test(5)); //50
let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height); // 12
const myFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);

console.log(square.height);