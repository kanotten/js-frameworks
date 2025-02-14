const arr = ["hello", "hei", "arigato", "hola"];

const filteredArray = arr.filter((word) => word.length > 4);

console.log(filteredArray);
console.log(4 > 3);

function returns1() {
  if (4 > 3) {
    return true;
  } else {
    return false;
  }
}
function returns2() {
  if (4 > 3) {
    return true;
  }
  return false;
}
function returns3() {
  return 4 > 3;
}
const function4 = () => 4 > 3;
