// 5. Split the string into an array using split() method
let quote =
  "Always remember that you are absolutely unique. Just like everyone else.";

let splitWord1 = quote.split("");

console.log(splitWord1[10]);

// Output: 'e'

let quoteWithNum =
  "Life2is3like4a5riding6a7bicycle8.9To10keep11your12balance13you14must15keep16moving";

let splitWord2 = quoteWithNum.split(/\d/);

// console.log(splitWord2);

//  Output: [
//   'Life',    'is',     'like',
//   'a',       'riding', 'a',
//   'bicycle', '.',      'To',
//   '',        'keep',   '',
//   'your',    '',       'balance',
//   '',        'you',    '',
//   'must',    '',       'keep',
//   '',        'moving'  ]
