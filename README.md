# https://github.com/EHB-TI/PortfolioWebAdvenced

# Mijn Portfolio

Dit is mijn portfolio. Hieronder vind je een korte beschrijving van de onderwerpen die in dit portfolio zijn.

## Elementen selecteren
Ik heb `document.getElementById` en `document.querySelector` gebruikt om elementen zoals de thema-schakelaar en het contactformulier in mijn HTML te selecteren.

## Elementen manipuleren
Ik heb de `classList` en `innerHTML` eigenschappen gebruikt om elementen zoals de thema-schakelaar en de projectkaarten in mijn HTML te manipuleren.

## Event aan een element koppelen
Ik heb de `addEventListener` methode gebruikt om click events aan de thema-schakelaar en de scroll-naar-boven knop te koppelen.

## Formulier valideren
Ik heb basisvalidatie geïmplementeerd in het contactformulier op de "Contact" pagina.

## Gebruiken van een constante
Ik heb de `const` keyword gebruikt om constanten zoals de thema-schakelaar en het contactformulier te definiëren.

## Gebruiken van template literals
Ik heb template literals gebruikt in de `genereerProjectHTML` functie om dynamische HTML te genereren voor de projectkaarten.

## Destructuring
Ik heb destructuring gebruikt in de console.log statements om eigenschappen uit de projectobjecten te halen.

## Spread & Rest operator
Ik heb de spread operator gebruikt in de console.log statements om een nieuwe array van leden te maken.

## Iteration over een array
Ik heb de `forEach` methode gebruikt om over de array van projectobjecten te itereren en dynamische HTML te genereren voor elke projectkaart.

## Arrow function
Ik heb arrow functions gebruikt in de `addEventListener` en `forEach` methoden, en in de Fetch API call.

## Callback function
Ik heb callback functions gebruikt in de `addEventListener` en `forEach` methoden, en in de Fetch API call.

## Promise
Ik heb promises gebruikt in de Fetch API call om posts op te halen van een externe bron.

## Consumer methods
Ik heb de `then` methode gebruikt in de Fetch API call om met de opgehaalde posts te werken.

## Async & Await
Ik heb async en await gebruikt in de Fetch API call om posts op te halen van een externe bron.

## Self executing function
Ik heb een self-executing function gebruikt om de Fetch API call te maken en de opgehaalde posts weer te geven.

## Fetch om data op te halen
Ik heb de Fetch API gebruikt om posts op te halen van 'https://jsonplaceholder.typicode.com/posts' en deze weer te geven.

## JSON manipuleren en weergeven
Ik heb JSON data gemanipuleerd en weergegeven in de Fetch API call door de opgehaalde posts te tonen.

## Basis CSS Animatie
Ik heb een basis CSS animatie geïmplementeerd in de header om een kleurveranderingseffect te creëren.

## Gebruiken van een flexbox of CSS grid
Ik heb flexbox gebruikt in de CSS voor de hoofd- en sectie-elementen om een responsieve layout te creëren.

## Gebruik van LocalStorage
Ik heb LocalStorage gebruikt om het huidige thema op te slaan, zodat het thema consistent blijft tussen verschillende browsersessies.


## bronnen
https://canvas.ehb.be/courses/33250/modules
https://developer.mozilla.org/fr/docs/Web/JavaScript
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
https://www.google.com/search?q=youtube+validate+form+javascript&rlz=1C1GCEA_enBE1024BE1024&oq=youtube+validate+form+javascript&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEINjgyM2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:6bdaeb20,vid:In0nB0ABaUk,st:0
https://www.youtube.com/watch?v=cuEtnrL9-H0&ab_channel=WebDevSimplified
https://www.youtube.com/watch?v=DHvZLI7Db8E&ab_channel=WebDevSimplified
https://www.w3schools.com/js/


## chatlog chatgpt

hoe werkt destructuring op javascript ?
ChatGPT
Destructuring in JavaScript is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. This can make your code more concise and easier to read. Destructuring can be used in various contexts such as assignments, function parameters, and more. Here’s a breakdown of how it works:

Array Destructuring
Array destructuring allows you to extract values from an array and assign them to variables in a single statement.

Example:

javascript
Copy code
const fruits = ['apple', 'banana', 'cherry'];

const [first, second, third] = fruits;

console.log(first);  // Output: apple
console.log(second); // Output: banana
console.log(third);  // Output: cherry
You can also use default values, skip items, and collect the remaining items using the rest parameter.

Default Values:

javascript
Copy code
const numbers = [1];

const [a = 10, b = 20] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 20
Skipping Items:

javascript
Copy code
const colors = ['red', 'green', 'blue'];

const [, , thirdColor] = colors;

console.log(thirdColor); // Output: blue
Rest Parameter:

javascript
Copy code
const scores = [100, 200, 300, 400];

const [firstScore, ...restScores] = scores;

console.log(firstScore);  // Output: 100
console.log(restScores);  // Output: [200, 300, 400]
Object Destructuring
Object destructuring allows you to unpack properties from an object and assign them to variables with the same name or a different name.

Example:

javascript
Copy code
const person = { name: 'John', age: 30 };

const { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
You can also assign to new variable names and use default values.

New Variable Names:

javascript
Copy code
const person = { name: 'John', age: 30 };

const { name: personName, age: personAge } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30
Default Values:

javascript
Copy code
const person = { name: 'John' };

const { name, age = 25 } = person;

console.log(name); // Output: John
console.log(age);  // Output: 25
Nested Destructuring
Destructuring can also be nested to extract values from nested arrays or objects.

Array Example:

javascript
Copy code
const numbers = [1, [2, 3]];

const [first, [second, third]] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3
Object Example:

javascript
Copy code
const person = {
  name: 'John',
  address: {
    city: 'New York',
    zip: 10001
  }
};

const { name, address: { city, zip } } = person;

console.log(name); // Output: John
console.log(city); // Output: New York
console.log(zip);  // Output: 10001
Function Parameters
Destructuring can also be used directly in function parameters to unpack values from an array or object passed to the function.

Array Example:

javascript
Copy code
function sum([a, b]) {
  return a + b;
}

console.log(sum([1, 2])); // Output: 3
Object Example:

javascript
Copy code
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person = { name: 'John', age: 30 };
greet(person); // Output: Hello, my name is John and I am 30 years old.
By using destructuring, you can write more concise and readable code, especially when dealing with complex data structures.




toon een code voorbeeld van spread en rest operator
ChatGPT
Zeker! De spread en rest operators (...) in JavaScript zijn krachtige tools voor het werken met arrays en objecten. Hieronder zie je voorbeelden van hoe ze werken.

Spread Operator
De spread operator wordt gebruikt om de elementen van een array of de properties van een object uit te spreiden.

Spread Operator met Arrays:

javascript
Copy code
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
Spread Operator met Objecten:

javascript
Copy code
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 };

console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
De spread operator kan ook worden gebruikt om een kopie van een array of object te maken.

javascript
Copy code
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }
Rest Operator
De rest operator wordt gebruikt om de rest van de elementen in een array of de rest van de properties in een object te verzamelen.

Rest Operator met Arrays:

javascript
Copy code
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
Rest Operator met Objecten:

javascript
Copy code
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a);    // Output: 1
console.log(b);    // Output: 2
console.log(rest); // Output: { c: 3, d: 4 }
De rest operator wordt ook vaak gebruikt in functieparameters om een variabel aantal argumenten te verzamelen.

Rest Operator in Functieparameters:

javascript
Copy code
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
Samengevat
De spread operator (...) wordt gebruikt om elementen of properties uit te spreiden, terwijl de rest operator (...) wordt gebruikt om de rest van de elementen of properties te verzamelen. Beide operators helpen bij het schrijven van meer flexibele en beknopte code.













