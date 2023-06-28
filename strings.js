var string = new String("Hello strings!")

console.log(string); // prints [String: 'Hello strings!']

console.log('' + string); // prints Hello strings!

// string constructor: returns a reference to the string function that created the instance's prototype.
console.log('string.constructor: ' + string.constructor); // prints string.constructor: function String() { [native code] }

// string length
console.log('string length: ' + string.length); // .length prints 14
