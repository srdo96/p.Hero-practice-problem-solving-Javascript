function totalShopping(cart) {
  let totalPrice = 0;
  for (const product of cart) {
    const price = product.price * product.quantity;
    totalPrice = totalPrice + price;
  }
  return totalPrice;
}

let shopping = [
  { product: "laptop", price: 50000, quantity: 1 },
  { product: "t-shart", price: 600, quantity: 5 },
  { product: "wath", price: 2999, quantity: 3 },
  { product: "book", price: 4300, quantity: 4 },
];

let total = totalShopping(shopping);
console.log(total);
