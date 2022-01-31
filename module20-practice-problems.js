// task1: find small Number form array

function getSmallNum(numList) {
  let smallNum = numList[0];
  for (let i = 1; i < numList.length; i++) {
    if (numList[i] < smallNum) {
      smallNum = numList[i];
    }
  }
  return smallNum;
}

let list = [11, 13, 19, 22, 5, 1];
let smallNum = getSmallNum(list);
console.log("The Small No: ", smallNum);

// task:2 find small number
let num1 = 3,
  num2 = 9,
  num3 = 50;

if (num1 < num2) {
  if (num1 < num3) {
    console.log("Small Num: ", num1);
  } else console.log("Small Num: ", num3);
} else {
  if (num2 < num3) {
    console.log("Small Num: ", num2);
  } else console.log("Small Num: ", num3);
}
