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

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


// let items = [250, 645, 300, 900, 50];                       // Practice Que 2

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items)

// let veggys = ["potato", "tomato", "onion", "raddis", "Okra"];

// veggys.push("brinjal", "Peppers");                             //Push is adding 

// console.log(veggys);


// let veggys = ["potato", "tomato", "onion", "raddis", "Okra"];

// console.log(veggys);
// let deletedItem = veggys.pop();                                 //Pop is deleted
// console.log(veggys);
// console.log("Deleted", deletedItem);



// let veggys = ["potato", "tomato", "onion", "raddis", "Okra"];

// console.log(veggys);
// console.log(veggys.toString());                                   //toString is different     
// console.log(veggys);


// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let DCHeroes = ["superman", "batman"];
// let indianHeroes = ["Shaktiman", "Krrish"];

// let hero = marvelHeroes.concat(DCHeroes, indianHeroes);                     //concat to add two or more arrays         

// console.log(hero);



// let marvelHeroes = ["thor", "spiderman", "ironman"];

// // marvelHeroes.unshift("antman");                                           //unshift() is add to start

// let val = marvelHeroes.shift();                               //shift() is delete from start & return
// console.log("delete", val);


// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.strang"];

// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1, 2));                            //slice(): return a piece of the array


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.splice(2, 2, 101, 102);                                                  //Replace Element

// arr.splice(2, 0, 102);                                                       //Add Element

// arr.splice(4, 3);                                                                //Delete Element



// Practice Que 1

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// let val = companies.shift();
// console.log("delete", val)

// companies.slice(2, 1, "Ola");

companies.push("Amazon");
