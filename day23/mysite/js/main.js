const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

const indal = document.getElementById("indal");
// indal.className = "form-control";

const small = document.getElementById("small");
small.className = "error";
small.innerText = "This field is required!";

const indalkumar = document.querySelector(".indal");
indalkumar.style.color = "red";
console.log(indalkumar);

const myDiv = document.getElementById("myDiv");

x = myDiv.querySelector("h1").style.color = "orange";
console.log(x);

const dyplaceholder = document.getElementById("confirm_password");
dyplaceholder.setAttribute("placeholder", "Enter Confirm Password");

const myButton = document.createElement("button");
const myButtonDiv = document.createElement("div");
myButton.innerHTML = "My Button CLick Here";
myButton.className = "btn btn-danger";
myButton.setAttribute(
  "style",
  "color:#fff; background-color:purple; font-weight:bold;"
);

myButton.onclick = () => {
  alert("Hello Bro");
};
document.body.appendChild(myButton);

const myInput = document.createElement("input");

console.dir(myInput);
console.dir(myButton.getAttribute("id"));

const myBox = document.querySelectorAll(".box");

console.log(myBox);
myBox.forEach((e) => {
  e.style.color = "purple";
});

const allListOfLi = document.querySelectorAll("li");
allListOfLi.forEach((e) => {
  e.style.hover = "red";
});

console.log(allListOfLi);
const myStyle = document.createElement("style");

console.log(document.getElementsByTagName("head"));
myButton.className = "indalkumar";
console.log(myButton.classList);
myButton.innerHTML = "Hello this is my button";
myButton.addEventListener("click", () => {
  myButton.setAttribute("data-bs-target");
  myButton.classList.add("#exampleModal");
});

const toggleButton = document.getElementById("toggleButton");
const toggleDiv = document.getElementById("toggleMenu");

toggleButton.classList.toggle("toggleDiv");

const myArray = ["indal", "kumar", "Yadav", "hello", "there"];

myArray.forEach((i, e) => {
  console.log(i, " ", e + " question is that");
});

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let i in myArray) {
  console.log(myArray[i]);
}
myFun = `<div>indal</div>`;
console.log(myFun);
