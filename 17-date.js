// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();

console.log(
  `Time format in  YYYY-MM-DD HH:mm is: ${year}-${month}-${day} ${hour}:${minute}`
);
console.log(
  `Time format in DD-MM-YYYY HH:mm is: ${day}-${month}-${year} ${hour}:${minute}`
);
console.log(
  `Time format in DD/MM/YYYY HH:mm is: ${day}/${month}/${year} ${hour}:${minute}`
);
