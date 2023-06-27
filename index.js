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


// labels in loops:
console.log("Labels in loops ':' ");

console.log('Entering the outer loop');
outerloop:
for (var i = 0; i < 10; i++) {
    console.log('outerloop: ' + i);
    innerloop:
    for (var j = 0; j < 10; j++) {
        if (j > 3) break;
        if (i == 2) break innerloop;
        if (i == 4) break outerloop;

        console.log('Inner loop: ' + j);
    }

}