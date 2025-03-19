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

// let arr = [1, 2, 3, 4, 5];                                                  //Prectice Que

// arr.forEach((val) => {
//   console.log(val * val);
// });


//  let nums = [67,52,39];                                      //map ELEMENT

//  nums.map((val) =>{
//     console.log(val);
//  });


//  let nums = [67,52,39];                                      //map ELEMENT

//  let newArr = nums.map((val) =>{
//     return val;
//  });

//  console.log(newArr);


//  let Arr = [1,2,3,4,5,6,7];                                  //filter ELEMENT

//  let evenArr = Arr.filter((val) =>  {
//     return val % 2 === 0;
//  });

//  console.log(evenArr);


// let Arr = [1, 2, 3, 4];                                     //reduce ELEMENT

// const output = Arr.reduce((res, curr) => {
//     return res + curr;
// });

// console.log(output);  //10


// let Arr = [111, 52, 63, 14];                                     //reduce ELEMENT

// const output = Arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);  //10

// let marks = [87, 88, 35, 92, 7, 94, 96, 63, 94, 72, 9, 2, 3, 94]     //practice Que 1

// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);


let n = prompt("Entre any Number");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);
const sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("Sum =", sum);

const factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("Factorial = ",factorial);