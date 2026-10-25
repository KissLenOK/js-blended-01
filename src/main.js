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

/* Task 3 */
/* Створіть функцію getDeliveryPrice(deliveryType). За допомогою switch поверніть вартість обраного способу доставки:
"pickup" — 0;
"standard" — 80;
"express" — 150;
будь-яке інше значення — -1.

Значення -1 означає, що спосіб доставки не знайдено.
 */
/* Code */
function getDeliveryPrice(deliveryType) {
  switch (deliveryType) {
    case 'pickup':
      return 0;
    case 'standard':
      return 80;
    case 'express':
      return 150;
    default:
      return -1;
  }
}

console.log(getDeliveryPrice('pickup')); // 0
console.log(getDeliveryPrice('standard')); // 80
console.log(getDeliveryPrice('express')); // 150
console.log(getDeliveryPrice('drone')); // -1

/*Етап 4 — Процес пакування
Створіть функцію showPackingProgress(quantity), яка за допомогою циклу for послідовно виводить у консоль повідомлення для кожної одиниці товару.
*/

function showPackingProgress(quantity) {
    if (quantity <= 0) {
        console.log("Немає товарів для пакування");
        return;
    }
        for (let i = 1; i <= quantity; i++) {
        console.log(`Пакуємо товар ${i} з ${quantity}`);
  }
}

showPackingProgress(3);
showPackingProgress(1);
showPackingProgress(0);
