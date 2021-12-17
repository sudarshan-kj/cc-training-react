function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
const button = document.querySelector("button");
button.addEventListener("click", createParagraph);
