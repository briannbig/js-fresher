console.log("hello World!")

var1 = 10
var2 = 20
var3 = var1 + var2

console.log(var1 + ' + ' + var2 + ' = ' + var3)


//declaring variables
var username, email, age;

var city;
var country;

username = "Sam doe"
email = "sam@doe.com"
age = 25;
city = "Nairobi"
country = "Kenya"

var isAdult = age >= 18

console.log('Type of age: ' + typeof age); // returns number
console.log('Type of username: ' + typeof username); // returns string
console.log('Type of isAdult: ' + typeof isAdult); // returns boolean

console.log(username + ' of email: ' + email + ' from ' + city + ', ' + country + ' is ' + age + ' years old so is he an adult? ...');
console.log(isAdult ? 'yes' : 'no');

age = "twenty five";

console.log(age); // returns sting

console.log('Type of age after change at runtime: ' + typeof age);