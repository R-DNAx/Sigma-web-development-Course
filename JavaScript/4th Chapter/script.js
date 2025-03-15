// let marks = [87,89,83,91,96,99,88];
// let superhero = ["hulk","IronMan","CaptainAmerica","SpiderMan","ShaktiMan"];

// console.log(marks);
// console.log(marks.length);                                  //strings is immutable 

// console.log(superhero);                                      //array is mutable 



//looping  is iterable (strings, objects, arrays) 

//For loop

// let superhero = ["hulk", "IronMan", "CaptainAmerica", "SpiderMan", "ShaktiMan"];  
// for (let idx = 0; idx < superhero.length; idx++) {
//     console.log(superhero[idx]);
// }

//for of

// let superhero = ["hulk", "IronMan", "CaptainAmerica", "SpiderMan", "ShaktiMan"];  //eg-1
// for (let hero of superhero){
//     console.log(hero);
// }


// let cities = ["delhi", "pune", "mumbai", "kolkata", "bangulore", "hyderbad"];   //eg-2
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }


// Practice Que 1

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);