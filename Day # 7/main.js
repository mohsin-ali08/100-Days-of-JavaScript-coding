let myBtn = document.querySelector("#btn");

myBtn.onclick = () =>{
    alert("hellow me lalun hun kya karun")
};



myBtn.onmouseover = ()=>{
    console.log("hello world hi helo")
    let  a = 89;
    a++;
    console.log(a);
}


let myBtn = document.querySelector("#btn");
let body = document.querySelector("body");
let mode = "dark";

myBtn.addEventListener("click", () => {
    if (mode === "dark") {
        mode = "white"
        body.classList.add("dark");
        body.classList.remove("white");
    } else {
        mode = "dark"
        body.classList.add("white");
        body.classList.remove("dark");
    }

    console.log(mode);
});



let box =document.querySelector(".dive")
box.addEventListener("mouseover", () =>{
    box.classList.add("box2");
});




// starting DOM 



let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").after(newBtn);




function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
};



// arrow function

const countVow() => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
};