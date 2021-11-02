//1
const cont = document.getElementById("container");
//2
const container = document.querySelector("#container");
//3
const second = document.getElementsByClassName("second");
//4
const olThird = document.querySelectorAll("ol > .third");
//5
cont.innerText = "Hello!";
//6
const foot = document.getElementsByClassName("footer");
foot[0].classList.add("main");
//7
foot[0].classList.remove("main");
//8
const newLi = document.createElement("li");
//9
newLi.innerText = "four";
//10
const unordered = document.querySelector("ul");
unordered.append(newLi);
//11
const ordered = document.querySelector("ol").children;
for (let li of ordered) {
    li.style.backgroundColor = 'green';
}
//12
foot[0].remove();