// 10. Boolean value is either true or false.

//     - Write three JavaScript statement which provide truthy value.

let arr = {} ? "true" : "false";

console.log(arr);

let arr1 = true ? "true" : "false";

console.log(arr1);

let num = 10 ? "true" : "false";

console.log(num);

/// Output:
// true
// true
// true

//     - Write three JavaScript statement which provide falsy value.

let num1 = null ? "true" : "false";

console.log(num1);

// const unDef = null;

let unDef = null ? "true" : "false";

console.log(unDef);

let empty = "" ? "true" : "false";

console.log(empty);

/// Output:
// false
// false
// false
