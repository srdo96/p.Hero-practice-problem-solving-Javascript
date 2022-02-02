function reverseText(text) {
  let reverse = "";
  for (const char of text) {
    reverse = char + reverse;
  }
  return reverse;
}

let text = "My name is sakib";
let newText = reverseText(text);
console.log(newText);

function getCheapestPhone(phones) {
  let cheapestPhone = phones[0];
  for (const phone of phones) {
    if (phone.price < cheapestPhone.price) {
      cheapestPhone = phone;
    }
  }
  return cheapestPhone;
}

const phones = [
  { model: "iPhone 13", price: 100000, ram: 8, camera: 12 },
  { model: "pixel 3", price: 80000, ram: 8, camera: 8 },
  { model: "galaxy Note 9", price: 78000, ram: 12, camera: 32 },
  { model: "One Pluse 7", price: 65000, ram: 12, camera: 16 },
  { model: "walton 10 pro", price: 40000, ram: 8, camera: 10 },
];

const myPhone = getCheapestPhone(phones);
console.log(myPhone);
