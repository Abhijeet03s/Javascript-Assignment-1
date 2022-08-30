// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

let add = shoppingCart.unshift("Meat");
console.log(shoppingCart);

// Output: [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

let addSugar = shoppingCart.push("Sugar");
console.log(shoppingCart);

// Output: [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

let removeHoney = shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
console.log(shoppingCart);

// Output: [ 'Meat', 'Milk', 'Coffee', 'Tea' ]

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// Output: [ 'Meat', 'Milk', 'Coffee', 'Green Tea' ]
