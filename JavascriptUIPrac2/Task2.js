
const header = document.getElementById("header");
header.innerHTML = "Hello from JavaScript!";
console.log("getElementById():", header.textContent);

const firstBox = document.querySelector(".box");
firstBox.style.color = "red";
firstBox.style.fontWeight = "bold";
console.log("querySelector():", firstBox.textContent);

const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach((box, index) => {
  box.style.backgroundColor = "#f0f8ff";
  console.log(`querySelectorAll()[${index}]:`, box.textContent);
});