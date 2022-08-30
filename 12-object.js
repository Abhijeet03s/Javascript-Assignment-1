// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const dateFn = new Date();

//1.
const year = dateFn.getFullYear();
console.log(year);

//2.
const month = dateFn.getMonth();
console.log(month);

//3.
const date = dateFn.getDate();
console.log(date);

//4.
const day = dateFn.getDay();
console.log(day);

//5.
const hours = dateFn.getHours();
console.log(hours);

//6.
const minutes = dateFn.getMinutes();
console.log(minutes);

//7.
const totalSeconds = Math.floor(dateFn.getTime() / 1000);
console.log(totalSeconds);
