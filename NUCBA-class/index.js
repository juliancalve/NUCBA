class Person {
    #name = '';
    _age = 0;

    constructor(name, age) {
        this.#name = name;
        this._age = age;
    }

    hablar() {
        console.log('Hola, estoy hablando' + this.#name);
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }

    getAge() {
        return this._age;
    }


    static respirar() {
    }
};


class Developer extends Person {

    languages = [];
    mainLanguage = '';

    constructor(name, age, mainLanguage, languages) {
        // super, hace referencia al constructor de la super-clase ( Person, que es de la cual extendemos )
        super(name, age);
        this.mainLanguage = mainLanguage;
        this.languages = languages;
    }

    codear() {
        console.log(`Estoy codeando en ${this.mainLanguage}`);
    }

}



// const dev = new Developer('Gere', 32, 'JavaScript', ['PHP', 'Java']);

// console.log(dev);

const person1 = new Person('pepe', 45);
// console.log(person1.getName());
// person1.setName('Fiorela');
// console.log(person1.getName());
person1.#name = 'Fafefi';
console.log(person1.#name);



// const person2 = new Person('Julieta', 32);
// const dev = new Developer('nahuel', 30, 'JavaScript', []);

// const develop1 = new Developer();
// develop1.hablar();



// Pilares de la POO OOP
//1- Herencia => Es la forma en que se crea una nueva clase, en base a otra ya existente ( adquiriendo
// atributos y metodos de la superclase )
//2- Polimorfismo => Es la capacidad de comportarse como si fuera de una clase a la cual extiende
//3- Encapsulamiento => Es la forma que tienen las clases para Resguardar sus atributos
//4- Abstraccion => La abstraccion es una clase, la cual no esta totalmente definida como para ser instanciada
// const example1 = [1, 'asdasd', {}, [1], [[[[[[]]]]]]];
// const arrPersons = [person1, person2, dev];



// class SerVivo {
//     alimentarse(){

//     }
// }

// class Mamifero extends SerVivo {

//     alimentarse() {

//     }
// }
