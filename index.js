const simpleList = ['One', 'Two', 'Blue', 'White'];

// Looping throught just to print out
// forEach and map
console.log('Printing out items in list using forEach');
simpleList.forEach(item => console.log(item));

console.log('Printing out items in list using map');
simpleList.map(item => console.log(item));
// const mapped = simpleList.map((item) => item);
// console.log(mapped);

// Filtering out 'One" from the simpleList
console.log('Printing out filtered items when not equal to -One-');
const filtered = simpleList.filter(item => item !== 'One');
console.log(filtered);

// Finding the index of an element in the array
console.log('Printing out index of selected item -White- should return 3');
const index = simpleList.indexOf('White');
console.log(index);

// Working with arrays of objects
const objectList = [
	{
		name: 'John',
		age: 35,
		position: 'Developer',
	},
	{
		name: 'Sarah',
		age: 38,
		position: 'Senior Developer',
	},
	{
		name: 'Kane',
		age: 23,
		position: 'Graduate Developer',
	},
	{
		name: 'Joey',
		age: 44,
		position: 'Digital Developer',
	},
];
// Loop to print out names
console.log(objectList.map(dev => dev.name));
// Filter out developer below 35 years old
console.log(objectList.filter(dev => dev.age < 35));

// Finding a specified object given a condition
// Example: find object whose age is 44
const indexDev = objectList.find(dev => dev.age === 44);
console.log(indexDev);

// Finding the indexOf of that specified object
const devIndex = objectList.map(dev => dev.age).indexOf(44);
console.log(devIndex);
