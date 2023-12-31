console.log("Functions")

// basic function
function sayHello() {
    console.log("Hello functions!");
}
sayHello();
// function with params
function printUserDetails(username, email, age, city, country) {
    var isAdult = age >= 18
    console.log(username + ' of email: ' + email + ' from ' + city + ', ' + country + ' is ' + age + ' years old so is he an adult? ...');
    console.log(isAdult ? 'yes' : 'no');
}
// function with return statement
function add(var1, var2) {
    return var1 + var2;
}

username = "Sam doe"
email = "sam@doe.com"
age = 25;
city = "Nairobi"
country = "Kenya"

printUserDetails(username, email, age, city, country);
var1 = 10; var2 = 23;
console.log(var1 + ' + ' + var2 + ' = ' + add(10, 39));

// nested functions
console.log('------Nested Functions------');
function hypotenuse(a, b) {
    function square(x) { return x * x; }
    return Math.sqrt(square(a) + square(b));
}
console.log(hypotenuse(3, 5));

// function constructor: new Function()
console.log('----function constructor-----');
var balance = new Function("cash", "debt", "return cash - debt;")
console.log(balance(100, 45));

// function literals: an expression that defines an unnamed function
console.log('------Function Literals-----');
var percent = function name(number) {
    return number / 100 * 100 + "%";
}
console.log(percent(10));
