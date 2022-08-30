// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

let x;
let y;

function solveLinEquation(a, b, c) {
  let eq = a * x + b * y + c;
  y = -c / b;
  x = -c / a;
  console.log(`${x}`);
  console.log(`${y}`);
}

solveLinEquation(5, 3, -30);
