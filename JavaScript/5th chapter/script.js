// function myFunction() {
//     console.log("Welcome to coding world");
//     console.log("I'm learning Java script");
// }

// myFunction();                   //redundancy is repeat
// myFunction();

// function myFunction(msg, n) {
//     console.log("I'm learning Java script");     // parameter -> input
// }

// myFunction("I love JS", 100); //argument

// Function -> 2 numbers, sum

// function sum(x, y) {
//     console.log(x + y);
// }

// function sum(x, y) {
//     s = x + y;                                   // x, y is local variables -> scope
//     console.log("before return");
//     return s;
// }

// let val = sum (3, 4);
// console.log(val);

// //sum function                                              //Moder JS fun
// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => {
//     console.log(a + b);
// }

// //Multiplication function                                       //Moder JS fun
// function mul(a, b) {
//     return a * b;
// }

// let arrowMul = (x, y) => {
//     console.log(x * y);
// }

// function countVowels(str) {                                                 // Prectice Que
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// const countVow = (str) => {                                                 // Prectice Que
//     let count = 0;
//     for (const char of str) {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }
//     }
//     return count;
//   }                                                          // in Arrow function

// let arr = [1,2,3,4,5];                                      //forEach Loop in Arrays(Higher Order Function / Methods)

// arr.forEach((val) => {
//     console.log(val);
// });

// let arr = ["world of", "coding"];

// arr.forEach((val , idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });

let arr = [1, 2, 3, 4, 5];                                                  //Prectice Que

arr.forEach((val) => {
  console.log(val * val);
});
