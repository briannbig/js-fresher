var string = new String("Hello strings!")

console.log(string); // prints [String: 'Hello strings!']

console.log('' + string); // prints Hello strings!

// string constructor: returns a reference to the string function that created the instance's prototype.
console.log('string.constructor: ' + string.constructor); // prints string.constructor: function String() { [native code] }

// string length
console.log('string length: ' + string.length); // .length prints 14

// prototype property: allows you to add properties and methods to any object
function book(title, author) {
    this.title = title
    this.author = author
}

var myBook = new book("php", "doe")
book.prototype.price = null
myBook.price = 23.54

console.log('Book title: ' + myBook.title);
console.log('Book author: ' + myBook.author);
console.log('Book price: ' + myBook.price);
