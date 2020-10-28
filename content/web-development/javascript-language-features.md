---
title: "JavaScript Language Features"
metaTitle: "JavaScript Language Features"
metaDescription: "JavaScript Language Features"
---

Ever since its standardization as ECMAScript, JavaScript has been evolving at a rapid pace to allow better performance, features and developer ergonomics. For developers it's important to remain up-to-date with the latest features and tricks of the most popular language on the web to date.

The following are some personal favourites among the latest JavaScript Language Features.

## Null(ish) Coalescing

**||** or the **OR**-operator will always stop execution after finding the first *truthy* value. We can use this property to ‘short-circuit’ statements or to provide default values.

```javascript
let user;
console.log(user || 'Anonymous'); // Anonymous
user = 'Sam';
console.log(user || 'Anonymous'); // Sam
```

**&&** or the **AND**-operator will always stop execution after finding the first *falsy* value or reaching the end of the statement. We can use this property to ensure that certain requirements are met.

```javascript
let user;
console.log(user && greet(user)); // undefined
user = 'Sam';
console.log(user && greet(user)); // Hello Sam
```

**??** or the **nullish coalescing** operator will return the first *defined* value. It is similar to the OR-operator with the exception that it doesn’t care about falsy values.

```javascript
let user;
console.log(user || 'Anonymous', user ?? 'Anonymous'); // Anonymous Anonymous
user = 0;
console.log(user || 'Anonymous', user ?? 'Anonymous'); // Anonymous 0
```

*Falsy values*: 0, ‘’ or empty string, false, undefined, null
*Defined values*: (value != undefined && value != null)

When combining the nullish coalescing operator with other operators (+, -, *, &&, ||) make sure to use parentheses.

```javascript
let user = 'Sam' && middleName ?? 'Wolfs'; // syntax error
```

## Optional Chaining

**?.** is similar to the &&-operator in that it stops execution in case of an *undefined* or *null* value.
Accessing or operating on non-existing object properties will lead to runtime errors; the optional chaining operator allows us to check for null or undefined and only continue execution on existing properties.

Before optional chaining

```javascript
let user = null;
 console.log(user && user.address && user.address.street); // undefined
```

After optional chaining

```javascript
console.log(user?.address?.street); // undefined
```

### Optional Chaining Use Cases

#### Static Properties

```javascript
console.log(user?.address?.street);
```

#### Dynamic Properties

```javascript
const key = 'middleName';
console.log(user?.[key]);
```

#### Functions

```javascript
console.log(user?.greet?.());
```

## Spread

**...** or the spread-operator turns any *iterable* into a list of its values.

```javascript
const doSomething = (x, y, z) => console.log(x, y, z);
const args = [1, 2, 3];
doSomething(args); // syntax error
doSomething(...numbers); // 1 2 3
```

When used in a function declaration’s parameter list it has the reverse effect and “condenses“ the list into an array.

```javascript
const doSomething = (...args) => console.log(args[0], args[1], args[2]);
doSomething(4, 5, 6, 7, 8, 9) // 4 5 6
```

### Spread Use Cases

#### Copying Arrays

```javascript
const array = ['Tennis', 'Football', 'Hockey'];
const copierArray = [...array]; // ['Tennis', 'Football', 'Hockey']
```

#### Merging Arrays

```javascript
const ballSports = ['Tennis', 'Baseball'];
const otherSports = ['Cycling', 'Swimming'];
const sports = [...ballSports, 'Skateboarding', ...otherSports];
  // ['Tennis', 'Baseball', 'Skateboarding', 'Cycling', 'Swimming']
```

#### String to Array

```javascript
const greeting = "Hello World";
const arrayGreeting = [...greeting];
  // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

```

#### Copying objects (shallow)

```javascript
const user = { firstName: 'Sam', lastName: 'Wolfs' };
const copiedUser = { ...user }; // { firstName: 'Sam', lastName: 'Wolfs' }
```

#### Merging Objects

*With duplicate keys, the last occurence will persist.*

```javascript
const user = { firstName: 'Sam', lastName: 'Wolfs' };
const userExtra = { phone: '123456789', city: 'Somewhereville' };
const mergedUser = { ...user, ...userExtra, firstName: 'Jos' };
  // { firstName: 'Jos', lastName: 'Wolfs', phone: '123456789', city: 'Somewhereville' }
```

## Pattern Matching/Destructuring

Often objects/arrays will contain more data than we need, having to reference the object before accessing a property can lead to rather lengthy code. We can use pattern matching to select a subset of the data.

```javascript
const user = { firstName: 'Sam', middleName: '??', lastName: 'Wolfs' };
const { firstName } = user;
console.log(firstName); // Sam

const sports = ['Football', 'Tennis', 'Baseball'];
const [firstSport, secondSport] = sports;
console.log(secondSport, firstSport); // Tennis Football
```

### Pattern Matching Use Cases

#### Recursion

```javascript
const sum = (...args) => {
  const [head, ...tail] = args;
  return head + (tail ? sum(tail) : 0);
}
sum(1, 2, 3, 4); // 10
```

#### Object Subset

```javascript
const person = { firstName: 'Sam', address: { street: 'SomeStreet' } };
const greet = (person) => {
  const { firstName } = person;
  return `Hello ${firstName}`;
}
```

#### Object subset (function definition)

```javascript
const person1 = { firstName: 'Sam', address: { street: 'SomeStreet' } };
const person2 = { firstName: 'Niek', address: { street: 'OtherStreet' } };
const people = [person1, person2];
const greetings = people.map(({ firstName }) => {
  return `Hello ${firstName}`;
});
```
