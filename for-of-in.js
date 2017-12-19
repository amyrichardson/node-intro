//For loops
let people = ['Scott', 'Chris', 'Kris'];

// for(let i = 0; i < people.length; i++) {
//     console.log('person: ', people[i]);
// } //end for loop

//ES6 for...in // also works with objects
// for(let index in people) {
//     console.log('person in: ', people[index]);
// }

//ES6 for...of
for(let person of people) {
    console.log('person of: ', person);
}

