const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];
function calculateTotalPer(cart) {
  let total = 0;//great example of function
  cart.forEach((item) => {
    let price = item.price
    if (price < 5) {
      price = price * 0.95;
    }
    total += price * item.quantity;
  });
if(total> 100){
  total = total * 0.9;
}
return total;}

function eachDiscount(cart) {
//  cart.forEach(item => {//toFixed(2)
 //   const discountPrice = item.price * 0.9;
    if ( (cart.price < 5)  => (cart.price *0.95) );{
      else
}
function total(anycartorwhatveer){
return total;

}
