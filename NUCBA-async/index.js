const inputName = document.getElementById('name');
const allNames = document.querySelector('#allNames');
const addButton = document.getElementById('submit');

const addName = () => {

    const nameValue = inputName.value;
    inputName.value = null;

    const tagH4 = document.createElement('h4');
    tagH4.innerText = nameValue;
    tagH4.className = 'name';


    allNames.appendChild(tagH4);
}

// function addName() {

// }

addButton.addEventListener('click', addName)

// Trae por clase
// querySelector('.name')
// trae por id
// querySelector('#name')
// trae por tag
// querySelectorAll('div')
