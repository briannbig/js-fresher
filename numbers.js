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