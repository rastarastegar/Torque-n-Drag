//  Object Destructuring

// const person = {
//     name: 'Ferenc',
//     age: 30,
//     location: {
//         city: 'Houston',
//         temp: 60
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = "Anonymous" , age } = person;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: "Ego is the Enemy",
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);


// Array Destructuring

const address = ['1710 West T C Jester', 'Houston', 'Texas', '77008' ];

const [ , city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['coffee (hot)', '$2.00', "$2.50", "$2.75" ];

const [name, , mediumPrice] = item;

console.log(`A medium ${name} cost ${mediumPrice}.`);