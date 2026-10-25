function calculateSubtotal(price, quantity) {
  if (quantity <= 0 || price <= 0) {
    return 0;
  }
  return price * quantity;
}

console.log(calculateSubtotal(250, 3)); // 750
console.log(calculateSubtotal(120, 1)); // 120
console.log(calculateSubtotal(250, 0)); // 0
/* Створіть функцію calculateDiscount(subtotal, isPremium), яка отримує попередню вартість замовлення та логічне значення зі статусом клієнта.



Правила знижки:

преміум клієнт із замовленням від 1000 включно отримує знижку 10%;
преміум клієнт із меншим замовленням отримує знижку 5%;
інші клієнти не отримують знижку, функція повертає 0;


Функція повинна повертати суму знижки, а не ціну після знижки. */
function calculateDiscount(subtotal, isPremium) {
  let discount = 0;

  if (isPremium && subtotal >= 1000) {
    discount = subtotal * 0.1;
  } else if (isPremium) {
    discount = subtotal * 0.05;
  }
  return discount;
}
console.log(calculateDiscount(1200, true)); // 120
console.log(calculateDiscount(800, true)); // 40
console.log(calculateDiscount(1200, false)); // 0
console.log(calculateDiscount(0, true)); // 0
