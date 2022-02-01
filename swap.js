// method 1
let a = 4;
let b = 9;
a = a + b;
b = a - b;
a = a - b;
console.log("a: ", a);
console.log("b: ", b);

// method 2 : destructuring method
[a, b] = [b, a];
console.log("a: ", a);
console.log("b: ", b);
