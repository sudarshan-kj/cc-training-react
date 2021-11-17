const para1 = document.querySelector('p');

para1.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  const para = document.querySelector("p")
  para.textContent = 'Hello, ' + name + "!";
}