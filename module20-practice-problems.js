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
