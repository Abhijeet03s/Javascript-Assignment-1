// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

import { countryList } from "./24-countries.mjs";

// Extract all the countries contain the word 'land' from the countries array and print it as array

let arrayLand = [];

countryList.forEach((e) => {
  if (e.includes("land")) {
    arrayLand.push(e);
  }
});
console.log(`${arrayLand}\n`);

// Extract all the countries containing only four characters from the countries array and print it as array

let fourLetter = [];

countryList.forEach((e) => {
  if (e.length == 4) {
    fourLetter.push(e);
  }
});
console.log(`${fourLetter}\n`);

// Extract all the countries containing two or more words from the countries array and print it as array
let twoWords = [];

countryList.forEach((e) => {
  if (e.includes("")) {
    twoWords.push(e);
  }
});
console.log(`${twoWords}\n`);

// Reverse the countries array and capitalize each country and stored it as an array

countryList.reverse();
let capitalArr = [];
countryList.forEach((e) => {
  capitalArr.push(e.toUpperCase());
});
console.log(`${capitalArr}\n`);

// Find the country containing the hightest number of characters in the countries array
let h = 0;
let hIndex;

countryList.forEach((e) => {
  if (e.length > h) {
    hIndex = countryList.indexOf(e);
    h = e.length;
  }
});

console.log(`${countryList[hIndex]}`);
