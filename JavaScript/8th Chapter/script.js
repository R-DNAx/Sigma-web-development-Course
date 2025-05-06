// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a); //26
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//   console.log("you are inside div");
// };

// btn1.addEventListener("click", (evt) => {
//   console.log("button1 was clicked");
//   console.log(evt);
//   console.log(evt.type);
// });

// btn1.addEventListener("click", (evt) => {
//   console.log("button1 was clicked - handler2");
// });

// const handler3 = () => {
//   console.log("button1 was clicked - handler3");
// };

// btn1.addEventListener("click", (evt) => {
//   console.log("button1 was clicked - handler4");
// });


// btn1,removeEventListener("click", handler3);

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode= "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode)
})

