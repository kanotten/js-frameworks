/* const arr = [0, 1, 2, 3, 4, 5, 6, 7, 10, 13, 15];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}
console.log(newArr);
 */

function foreach(arr, callback) {
  let i = 0;
  while (i < arr.length) {
    callback(arr[i]);
    i++;
  }
}

function map(arr, callback) {
  const newArr = [];
  let i = 0;
  while (i < arr.length) {
    newArr.push(callback(arr[i]));
    i++;
  }
  return newArr;
}

const arr = ["hello", "class", "good", "morning"];

foreach(arr, (item) => {
  console.log(item);
});
