// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

let count = 0;
let i, j;
for (j = 2; j <= 100; j++) {
  for (i = 1; i <= j; i++) {
    if (j % i == 0) count++;
  }
  if (count == 2) console.log(j);
  count = 0;
}
