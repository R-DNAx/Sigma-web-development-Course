// this is a Comment and print hello word

/* console.log("Hello world!"); */

// let a = 2;
// let b = 5;

// console.log("a =", a, "& b =", b);
// console.log("a + b = ", a + b);
// console.log("b - a = ", b - a);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b); // modulus
// console.log("a ** b = ", a ** b); // a to the power b 

// unary operator

// let a = 2;
// let b = 5;

// console.log("a =", a, "& b =", b);

// console.log("a++ =", a++); // post increment
// console.log(a);

// console.log("++a =", ++a); // pre increment


// console.log("b-- =", b--); // post Decrement
// console.log(b);

// console.log("--b =", --b); // pre Decrement


// let a = 2;
// let b = 5;

// a += 4; // a = a + 4
// console.log("a =", a); //6

// a -= 4; // a = a - 4
// console.log("a =", a); //2

// a *= 4; // a = a * 4
// console.log("a =", a); //8

// a /= 4; // a = a / 4
// console.log("a =", a); //2

// a %= 4; // a = a % 4
// console.log("a =", a); //2

// a **= 4; // a = a ** 4
// console.log("a =", a); //16

// comparion Operator
// let a = 2;
// let b = 5;

// console.log("a==b", a==b); //False 
// console.log("a!=b", a!=b); //True

// let a = 2;
// let b = "5";

// console.log("a===b", a===b); //false
// console.log("a!==b", a!==b); //true

// let a = 2;
// let b = 5;

// console.log("a>=b", a>=b); //false
// console.log("a<=b", a<=b); //true

// logical Operators

// let a = 2;
// let b = 5;

// console.log("cond1 && cond2 =" , a < b && a === 6);

// console.log("cond1 || cond2 =" , a < b || a === 6);

// console.log("!(2 < 5) =" , a < b );

//Conditional statements

// let age = 26;

// if (age>= 18) { 
//     console.log("you can VOTE");
// };

// if (age < 18) {
//     console.log("you cannot VOTE");
// }

// let mode = "Blue";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light"){
//     color = "White";
// }

// console.log(color);

// let age = 08;

// if (age >=18) {
//     console.log("Vote");
// } else {
//     console.log("Not Vote");
// }


// Odd or even

// let num = 25;

// if(num % 2 === 0) {
//     console.log(num, "is Even");
// } else {
//     console.log(num, "is Odd")
// }

// syntax -> rules

// let mode = "pink";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue"){
//     color = "blue";
// } else if (mode === "pink"){
//     color = "Pink";
// } else {
//     color = "White";
// }    

// console.log(color);



// Ternary Operator

// let age = 1;

// let result = age >= 18 ? "adult" : "not adult"; //Simpler, Compact if-else
// console.log(result);

// age >= 18 ? console.log("adult") : console.log("not adult");



//practice Que 1

// let num = prompt("Enter a number");

// if (num % 3 === 0) {
//     console.log(num, "is a multiple of 3");
// } else {
//     console.log(num, "is Not a multiple of 3");
// }

//practice Que 2

let marks = 165;
let grade;

if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks <= 89 && marks >= 70) {
    grade = "B";
} else if (marks <= 69 && marks >= 60) {
    grade = "C";
} else if (marks <= 59 && marks >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Acconding to your Score, Your grade was :" , grade);
