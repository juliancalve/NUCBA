const names = ['Nicolas', 'Luciano', 'Paula', 'Florencia'];

const allNames = document.querySelector('#allNames');

const buttonSubmit = document.querySelector('#submit');


// async function nameSelector() {

// }

const nameSelector = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let selectedName = null;
            const randomNumber = Math.floor(Math.random() * 10);
            console.log(randomNumber);
            selectedName = names[randomNumber];
            if(selectedName) {

                resolve(selectedName);
            } else {
                reject({ message: `No existe el nombre, dio ${randomNumber}`, code: 404});
            }
        }, 1500);
    });

}

const onClick = async () => {
    try {
        const nameValue = await nameSelector();
        const tagH4 = document.createElement('h4');
        tagH4.innerText = nameValue;
        tagH4.className = 'name';


        allNames.appendChild(tagH4);
    } catch(e) {
        const error = document.createElement('p');
        error.innerText = e.message;
        error.className = 'error';
        allNames.appendChild(error);
    }
}

buttonSubmit.addEventListener('click', onClick);


