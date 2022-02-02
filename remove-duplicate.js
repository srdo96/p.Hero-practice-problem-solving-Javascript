// method 1
function removeDuplicate(names) {
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    let flag = 0;
    for (let j = 0; j < newNames.length; j++) {
      if (names[i] == newNames[j]) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      newNames.push(names[i]);
    }
  }
  return newNames;
}

// method 2
function removeDuplicateItems(names) {
  let newList = [];
  for (const element of names) {
    if (newList.indexOf(element) == -1) {
      newList.push(element);
    }
  }
  return newList;
}

let nameList = [
  "abul",
  "babul",
  "samsul",
  "babul",
  "bulbul",
  "kabul",
  "samsul",
];
let newList = removeDuplicateItems(nameList);
console.log(newList);
