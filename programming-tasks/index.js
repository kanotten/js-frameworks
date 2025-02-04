// log out numbers 0 to 10

// Different ways to loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let limit = 10;
for (let i = 0; i <= limit; i++) {
  console.log(i);
}
let i = 0;
while (i <= limit) {
  console.log(i);
  i++;
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// forEach does "something" for every iteration
arr.forEach((item) => console.log(item));
// map returns a new array
arr.map((item) => console.log(item));
// C style loops allow is to break, continue, return and change the original array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  arr[i] = 10;
}
console.log(arr);

let count = 0;
while (count < arr.length) {
  console.log(arr[count]);
  count++;
}
// "for of" loops allow is to break, continue and return
for (const item of arr) {
  console.log(item);
}
// "for in" loops allow is to break, continue, return and change the original array
for (const i in arr) {
  console.log(arr[i]);
}

/* 
  break;
  return;
  continue; 
  mutate original array
*/
