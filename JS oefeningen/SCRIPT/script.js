let firstName = 'Jay';
firstname = true;

const id = { name: 'Jane', age : 66, birthday: true};
console.log(id.name);

// const welcomeMessage = 'Hallo' + id.name;
const welcomeMessage = `Hallo ${id.name}! Jij bent ${id.age} jaar oud.`;
console.log(welcomeMessage)

if (id.birthday) {
    console.log('Happy birthday!')
}else{
    console.log('Jij bent niet jarig.')
}

id.birthday ? console.log('Happy birthday!') : console.log('Jij bent niet jarig');

if (id.age >= 18 && id.age < 65) {
    console.log('Volwassen');
} else if (id.age >= 65){
    console.log('Pensioen')
} else {
    console.log('Kind')
}

function sum(a, b){
    return a + b
}

const sum2 = (a, b) => {
    return a + b;
}

const sum3 = (a, b) => a + b;

for (let i = 0; i < 5; i++){
    console.log(i)
}

// let i = 0
// while(i < 5){
//     console.log(i)
// }
