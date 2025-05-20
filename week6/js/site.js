const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 15 },
  { name: "Eve", age: 45 }
];

//console.log(people);

const names = people.map(person => person.name);
console.log({names}); // ["Alice", "Bob", "Charlie", "David", "Eve"]

const ages = people.map(currentItem => currentItem.age);
console.log({ages}); // ["Alice", "Bob", "Charlie", "David", "Eve"]


const adults = people.filter(person => person.age >= 18);
console.log({adults});

// children ?
const children = people.filter(person => person.age < 18);
console.log({children}); 


const totalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log({totalAge}); // 129


const adults2 = people.filter(p => p.age >= 18);
const totalAdultAge = adults2.reduce((sum, p) => sum + p.age, 0);
const averageAge = totalAdultAge / adults2.length;

console.log({averageAge}); // 32.33...