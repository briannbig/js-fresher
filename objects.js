// the new operator

var employee = new Object();
var authors = new Array("Sam", "doe", 2)
var day = new Date()

console.log('authors: ' + authors);
console.log('today: ' + day)

function addPrice(amount) {
    this.price = amount;
}

//constructing an object
var book1 = new Object() //creating the object
book1.subject = "Perl"
book1.author = "doe"
console.log("book one:");
console.log(book1);

function book(subject, name) {
    this.subject = subject;
    this.name = name;
    this.addPrice = addPrice;
}

var book2 = new book("PHP", "sam")
book2.addPrice(300.32)
console.log("book two: ");
console.log(book2);