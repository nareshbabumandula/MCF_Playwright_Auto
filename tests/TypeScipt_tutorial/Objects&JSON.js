const person = 
{
    name: "naresh", 
    age: 42, 
    city: "Hyderabad",
    isActive: true
};
console.log(person); // { name: 'naresh', age: 42, city: 'Hyderabad', isActive: true }
console.log(person.name); // naresh    
console.log(person['age']); // 42
console.log(person.city); // Hyderabad
console.log(person.isActive); // true

// convert object to JSON string
const personarray = JSON.stringify(person);
console.log(personarray); // {"name":"naresh","age":42,"city":"Hyderabad","isActive":true}

// Parse JSON string back to object
const personParsed = JSON.parse(personarray);
console.log(Array.isArray(personParsed)); // { name: 'naresh', age: 42, city: 'Hyderabad', isActive: true }
console.log(personParsed.name); // naresh
console.log(personParsed.age); // 42