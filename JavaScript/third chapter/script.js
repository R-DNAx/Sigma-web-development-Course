//Loops in JS

// console.log("Nishant");
// console.log("Nishant");
// console.log("Nishant");
// console.log("Nishant");
// console.log("Nishant");

// for (let count = 1; count <= 3000; count++){
//     console.log("I Love Coding ❤");
// }

// let sum = 0;
// for(let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);


// let sum = 0;
// let n = 100;
// for(let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);


// Infinite Loops

// for(let i = 1; i >= 0; i++) {
//     sum = sum + i;
// }


// while Loops

// let i = 1;
// while (i <= 10) {
//     console.log("i =", i );
//     i++;
// }


                                            //do-while Loops

// let i = 1;
// do {
//     console.log("i =", i );
//     i++;
// } while (i <= 10);


                                            //for-of Loop

// let str = "JavaScript";

// for (let i of str) {                //(i) = iterator -> characters
//     console.log("i=", i);
// }



// let str = "JavaScript";
// let size = 0;
// for (let i of str) {               
//     size++;
// }

// console.log("string size =", size);



// let student ={                               //for-in Loop
//     name:"Java",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for (let key in student) {
//     console.log ("key =", key, "value", student[key]);
// }


//[Pactice Que 1]

// for (let num = 1; num <= 100; num++){
//     if (num% 2=== 0) {                  // {EVEN NUMBER}               
//         console.log("num =", num);
//     }
//     // console.log("num =",num);
// }


//[Pactice Que 2]

let gameNum = 25;

let userNum = prompt("Guess the game number :");

while (userNum != gameNum) {           //{game number is not equal to user number}
    userNum = prompt("Guess the game number :");
}

console.log("congratulation")