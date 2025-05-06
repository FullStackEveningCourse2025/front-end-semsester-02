
function GettingStarted() {
    console.log('Site JS is loaded')
}

function StringDemo() {

    let age = 63;
    let name = "John";
    let message = `My name is ${name} and my age is ${age}`
    return message;

}

function ListFruitDemo() {

   let fruits = ["apple", "orange","banana"]

   console.log(`There are ${fruits.length} in the fruits array`)

   // what is the method for addiing an additional fruit?
   // what is method for removing the fruit at the end?
   // Do you know how to write a loop to output all items in list?

   fruits.push("strawberry");

   for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
   }

   let removedFruit = fruits.pop();

   console.log(`The removed fruit is ${removedFruit}`)

   for(const fruit of fruits) {
    console.log(fruit);
   }

   // shift and unshift is for adding / removing at the start of an array

}

function RemoveAllFruitOneByOne() {

    let fruits = ["apple", "orange","banana"]
 
    while(fruits.length > 0) {
        let removedFruit = fruits.pop();
        console.log(`The removed fruit is ${removedFruit}`)
    }

    if (fruits.length==0) {
        console.log(`All fruit is gone`)
    }

 }

 function DestroyAllPlanets() {

    let planets = ["mercury","venus","earth", "mars","jupiter"]
 
    while(planets.length > 0) {
        let removedPlanet = planets.pop();
        console.log(`The removed planet is ${removedPlanet}`)
    }

    if (planets.length==0) {
        console.log(`All planets are gone :-() `)
    }

 }

DestroyAllPlanets();
GettingStarted();

let message = StringDemo();
console.log(message);
ListFruitDemo();
RemoveAllFruitOneByOne();