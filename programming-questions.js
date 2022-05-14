// 1. predict the output
var a = 10;
{
    a = -10;
}
let b = a;
{
    let b = -20;
}

// console.log(b) 
// ans: -10

// 2. Predict output

var animals = ["cat", "dog", "cow"];
animals[89] = "fox";
// console.log(animals); 
// ans:


// 3. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [1, 4, 5, 6, 14];
// output: [2, 3, 4, 3, 10, 6]
var ar = mergeExclusive(ar1, ar2);
console.log(ar);

function mergeExclusive(arr1, arr2)
{
 //code goes here
  let mergedArray = [];
  mergedArray = arr1.filter(ele => !arr2.includes(ele));
  mergedArray = [...mergedArray, ...arr2.filter(ele => !arr1.includes(ele))];

  return mergedArray;
}

// 5. write a recursive function to calculate factorial of a given positive number

function factorial(number) {
  if (number == 1) return 1;
  else return factorial(number - 1) * number;
}

// n! = n * n-1!

// console.log(factorial(3))

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …….

function findFibo(n) {
  //base condition
  if (n < 2) return n;
  //recurrence
  else {
    return findFibo(n - 1) + findFibo(n - 2);
  }
}

console.log(findFibo(8));
  
// 6. predict the output  
console.log(true + "5") // true5
console.log(true + 5) // 6
console.log(5 + true + "5") // 65

console.log([] + []) // ""

// Will this work?
const testString = "hello world";
const isAllCaps = false;
if (testString === testString.toUpperCase()) {
  isAllCaps = true;
}

// Console log outputs
let p1 = new Promise((resolve, reject) => {
  resolve("foo");
});
let p2 = new Promise((resolve, reject) => {
  reject("bar");
});
console.log("bip");
p1.then((val) => {
  console.log(val);
  return p2;
})
  .then((val) => {
    console.log("baz");
  })
  .catch((err) => {
    console.log(err);
  });
console.log("bop");

// Any error?
class MyList extends Array {
  constructor(someArg) {
    this.someArg = [...someArg];
  }
}
let theList = new MyList("foo");

// Find value
function foo(obj) {
  return { a: obj.bar, b: obj.baz };
}
const { a } = foo({ bar: 27, baz: 41 });

// what is the output
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

// value of k
let i = 3;
let j = 4;
let k = 1;
for (i = 0; i < 3; i++) {
  k += j;
  j = j - 1;
}


