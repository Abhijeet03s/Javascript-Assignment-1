// 30. Write a script which generates a random hexadecimal number.
let hexCode = "";
let hexChar = "0123456789abcdef";
for (let i = 0; i < 6; i++) {
  let randomHex = Math.floor(Math.random() * hexChar.length);
  hexCode += hexChar.charAt(randomHex);
}
console.log(`#${hexCode}`);
