// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sum = 0;

ages.forEach((e) => {
  sum += e;
  console.log(sum);
});

// Sort the array
ages.sort();
console.log(ages);

// find the max number
let max = Math.max(...ages);
console.log(max);

// find the min number
let min = Math.min(...ages);
console.log(min);

// find the average

let average = sum / ages.length;
console.log(average);

// find the median
let median = ages[Math.round(ages.length / 2)];
console.log(median);

// find the range of the ages
let range = max - min;
console.log(range);

// compare the value
console.log(
  `Difference between min and average is ${Math.abs(min - average).toFixed(2)}`
);
console.log(
  `Difference between max and average is ${Math.abs(max - average).toFixed(2)}`
);
