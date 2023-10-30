//Filter Methods//
//Method--1//

var numbers = [1, 2, 3, 4, 5];

function Double(x) {
  return x * 2;
}

//Method--2//
//For each Method

var num = [1, 2, 3, 4, 5];
var a = 0;

num.forEach(function (currentnum) {
  a += currentnum;
});

console.log(a); // This will output the sum of the numbers in the array (15 in this case)

//Method--3//
//Filter Method//

// Example 1: Filtering even numbers from an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4, 6, 8, 10]
