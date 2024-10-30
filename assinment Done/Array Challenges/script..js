//1-Always hungry:
function alwaysHungry(arr) {
  // My code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "food") console.log("yammy , yummy");
    else console.log("i am hungry");
  }
  return 0;
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"

alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

// //2-High Pass Filter:
function highPass(arr, cutoff) {
  // My code here
  var filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// //3-Better than average:
function betterThanAverage(arr) {
  var sum = 0;
  // calculate the average
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var average = sum / arr.length;
  var count = 0;
  // count how many values are greated than the average
  for (j = 0; j < arr.length; j++) {
    if (arr[j] > average) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// //4-Array Reverse
function reverse(arr) {
  arr.reverse();
  // your code here
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// //5-Fibonacci Array:
function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  for (let i=2 ; i<n ; i++){
    fibArr[i] = fibArr[i-1] + fibArr[i-2];  // next number is the sum of the two preceding ones
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
