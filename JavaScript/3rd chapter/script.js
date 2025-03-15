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

// let gameNum = 25;

// let userNum = prompt("Guess the game number :");

// while (userNum !      = gameNum) {           //{game number is not equal to user number}
//     userNum = prompt("Guess the game number :");
// }

// console.log("congratulation")



// let str= "Love Coding";                                //Strings 
// // let str2= 'Java';

// console.log(str[5]);                              //position

// //Template Literals 
// let specialstrings = `this is a template literal`;
// // console.log(specialstrings);
// console.log(typeof specialstrings);

// let Obj = {
//     item: "pen",
//     price: 10,
// };

// console.log("The cost of", Obj.item, "is", Obj.price, "rupees");


// let output = `The cost of ${Obj.item} is ${Obj.price} rupees`;
// console.log(output);

// let specialstrings = `this is a template literal ${1+2+3}`;
// console.log(specialstrings);


// //Template Literals 
// console.log("Love\nCoding");
// console.log("Love \t Coding");


// let str = "Love\tCoding";
// console.log(str.length);



// let str = "Love Coding";
// let NewStr = str.toUpperCase();
// console.log(str);
// console.log(NewStr);


// let str = "Love Coding";
// NewStr = str.toUpperCase();
// console.log(NewStr);



// let str = "Love Coding";
// NewStr = str.toLowerCase();
// console.log(NewStr);




// let str = "  Love  Coding     &  JS   "  ;
// console.log(str.trim());



// let str = "HelloCoder";
// console.log(str.slice(0,9));





// let str1 = "Hello";
// let str2 = "Coder";

// let res = str1 + str2 + "I Love Coding" ;

// console.log(res);


// let res = 1234 + "Coding Lover" ;

// console.log(res);


// let res ="Coding Lover" ;

// console.log(res.replace("Lover", "Life"));



// let res ="Coding Lover Lover Lover" ;

// console.log(res.replaceAll("Lover", "Life"));



// let res ="Coding Lover Lover Lover" ;

// console.log(res.charAt(8));






//[Pactice Que 1]


// let userName = prompt("USER NAME :");

// console.log("@"+userName+userName.length)                       //byME





let fullName = prompt("Enter your Fullname without spaces :");

let userName = "@" + fullName + fullName.length;

console.log(userName);

