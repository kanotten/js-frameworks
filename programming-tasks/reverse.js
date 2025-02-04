// Log out 10 to 0
for (let i = 10; i >= 0; i--) {
  //console.log(i);
}

// Log out the values in reverse order
const arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
  //console.log(arr[i]);
}

// Create a function that returns a reversed array
function reverse(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const reversedArr = reverse(arr);
/* console.log(reversedArr); */

// Create a function that returns a new array with all values doubled
// eg: [1,2,3] = [2,4,6]
function doubleArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}
const doubleArr = doubleArray(arr);
// Using js map method
const mapDoubled = arr.map((item) => {
  return item * 2;
});

// Change the original array to be reversed
// arr = [1,2,3,4,5]
function reverseInPlace(arr) {
  /* const temp1 = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp1;

  const temp2 = arr[1];
  arr[1] = arr[arr.length - 2];
  arr[arr.length - 2] = temp2; */
  /* 
  What happens if we dont do arr.length/2
  [1, 2, 3, 4]
  [4, 2, 3, 1]
  [4, 3, 2, 1]
  [4, 2, 3, 1]
  [1, 2, 3, 4]
   */
  for (let i = 0; i < arr.length / 2; i++) {
    const tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
}
const toReversed = [1, 2, 3, 4, 5];

reverseInPlace(toReversed);
console.log(toReversed);

// arr should be = [5,4,3,2,1] at this point
/* console.log(arr); */

//less performant reversing
function exampleReverse(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i];
  }
}
