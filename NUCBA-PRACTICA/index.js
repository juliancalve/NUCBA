
//Los objetos pueden tener
// Props y methods

const persons = [
    {
        name: 'Paula',
        age: 32
    },
    {
        name: 'Gabriel',
        age: 31
    },
    {
        name: 'Pedro',
        age: 40
    },
    {
        name: 'Joaquin',
        age: 22
    }
    
];

// const finded = persons.find( p => p.mother.age === 79 );

// const mapped = persons.map( (p) => {
//     return {
//         ...p,
//         name: p.name.toUpperCase(),
//         isAlive: true
//     }

// } );

const arr = persons.filter( p => p.age > 30 ).map( p => p.name ).find( name => name === 'Pedro');

console.log(arr);