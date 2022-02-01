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

let nameList = [
  "abul",
  "babul",
  "samsul",
  "babul",
  "bulbul",
  "kabul",
  "samsul",
];
let newList = removeDuplicate(nameList);
console.log(newList);
