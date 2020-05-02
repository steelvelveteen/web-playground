document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello Webpack Playground');

});

const personOne = {
    name: 'Joey',
    age: 45,
    address: {
        city: 'Adelaide',
        state: 'SA'
    }
}

const personTwo = {
    name: "Sonoya Mizuno",
    age: 34,
    address: {
        city: 'Tokyo',
        state: 'Japan'
    }
}
const first = personTwo.name.split(' ')[0];
const last = personTwo.name.split(' ')[1];
console.log(first);
console.log(last);

const { name: fullName, address: {state: country} } = personTwo;
console.log(fullName);
console.log(country);