// The Number object represents numerical date, either integers or floating-point
// numbers. In general, you do not need to worry about Number objects because
// the browser automatically converts number literals to instances of the number
// class.

var number1 = new Number()
console.log('number 1:');
console.log(number1);

var number2 = new Number(34);
console.log('number 2:');
console.log(number2);

var number3 = new Number("some invalid data") // returns NaN
console.log('number 3')
console.log(number3);

// Property          |   Description
// ------------------------------------------------------------------------------------------
// MAX_VALUE         |   The largest possible value a number in JavaScript
// can have          |   1.7976931348623157E+308
// MIN_VALUE         |   The smallest possible value a number in JavaScript can have 5E-324
// NaNEqual          |   to a value that is not a number.
// NEGATIVE_INFINITY |   A value that is less than MIN_VALUE.
// POSITIVE_INFINITY |   A value that is greater than MAX_VALUE
// prototypeA        |   static property of the Number object. Use the prototype property to assign new properties and methods to the Number object in the current document
// constructor       |   Returns the function that created this object's instance. By default this is the Number object.

