// task:1 find small Number form array

function getSmallNum(numList) {
  let smallNum = numList[0];
  for (let i = 1; i < numList.length; i++) {
    if (numList[i] < smallNum) {
      smallNum = numList[i];
    }
  }
  return smallNum;
}

let list = [11, 13, -19, 22, 5, 1];
let smallNum = getSmallNum(list);
console.log("The Small No: ", smallNum);

// task:2 find small number
let num1 = 30,
  num2 = 90,
  num3 = 5;

if (num1 < num2 && num1 < num3) {
  console.log("Small Num: ", num1);
} else if (num2 < num1 && num2 < num3) {
  console.log("Small Num: ", num2);
} else console.log("Small Num: ", num3);

// task:3 find avg from an array

function getAvg(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++) {
    sum += numList[i];
  }
  let avg = sum / numList.length;
  return avg;
}

list = [20, 43, 98, 13, 59, 5];
let avg = getAvg(list);
console.log("Avg of array: ", avg);

// task:4 find the area of a quadrilateral
function getArea(length, height) {
  let area = length * height;
  return area;
}

let length = 13;
let height = 6;
let area = getArea(length, height);
console.log("The area of Quadrilateral: ", area);

// task: 5 find second largest number from an array
function getSecondLargestNum(list) {
  let accendingOrderList = [];
  let la;
  for (const item of list) {
    item > item;
  }
}

//extra:1 Fibonacci number
function fibonacciNum(limit) {
  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);
  let sum = 0;
  for (let i = 0; i < limit - 2; i++) {
    sum = a + b;
    console.log(sum);
    a = b;
    b = sum;
  }
}
function fibonacciNumArray(n) {
  let fibof = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  return fibo;
}

fibonacciNum(1);
fibonacciNumArray(6);
