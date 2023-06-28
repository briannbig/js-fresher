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


// .................string methods....................
// Method               |   Description
// --------------------------------------------------------------------------------------------------------------------
// charAt()             |   Returns the character at the specified index.
// charCodeAt()         |   Returns a number indicating the Unicode value of the character at the given index.
// concat()             |   Combines the text of two strings and returns a new string.
// indexOf()            |   Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
// lastIndexOf()        |   Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
// localeCompare()      |   Returns a number indicating whether a reference string comes before or after or is the same as the given string in sorted order.
// match()              |   Used to match a regular expression against a string.
// replace()            |   Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
// search()             |   Executes the search for a match between a regular expression and a specified string.
// slice()              |   Extracts a section of a string and returns a new string.
// split()              |   Splits a String object into an array of strings by separating the string into substrings.
// substr()             |   Returns the characters in a string beginning at the specified location through the specified number of characters.
// substring()          |   Returns the characters in a string between two indexes into the string.
// toLocaleLowerCase()  |   The characters within a string are converted to lower case while respecting the current locale.
// toLocaleUpperCase()  |   The characters within a string are converted to upper case while respecting the current locale.
// toLowerCase()        |   Returns the calling string value converted to lower case.
// toString()           |   Returns a string representing the specified object.
// toUpperCase()        |   Returns the calling string value converted to uppercase.
// valueOf()            |   Returns the primitive value of the specified object.
