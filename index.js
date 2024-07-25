const names = [];
let usedNames = [];

function generateRandomName() {
  const nameDisplay = document.getElementById('nameDisplay');
  console.log(nameDisplay);
  const generateButton = document.getElementById('generateButton');

  generateButton.classList.add('active');

  setTimeout(() => {
    generateButton.classList.remove('active');
  }, 300);

  nameDisplay.style.opacity = 0;

  let availableNames = names.filter((name) => !usedNames.includes(name));
  let randomIndex = Math.floor(Math.random() * availableNames.length);
  let randomName = availableNames[randomIndex];

  usedNames.push(randomName);
  console.log(names.length);
  if (names.length === 0) {
    nameDisplay.innerText = 'No Players Left!!!';
  } else {
    nameDisplay.innerText = randomName;
  }
  names.splice(randomIndex, 1);
  displayNames();
  updateCount();
  nameDisplay.style.opacity = 1;

  // setTimeout(() => {}, 1000); // Wait for 0.5 seconds before showing the new name
}

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const addNameButton = document.getElementById('addNameButton');
  const nameList = document.getElementById('nameList');

  addNameButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
      names.push(name);
      displayNames();
      updateCount();
      nameInput.value = '';
      nameInput.focus();
    }
  });
});

function displayNames() {
  nameList.innerHTML = '';
  names.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
  });
}

function updateCount() {
  const count = nameList.children.length;
  countContainer.textContent = `Count: ${count}`;
}
