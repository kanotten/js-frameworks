const tasks = [
  {
    task: "Eat breakfast",
    completed: true,
  },
  {
    task: "Brush teeth",
    completed: false,
  },
  {
    task: "Shower",
    completed: false,
  },
];

const eachRes = tasks.forEach((item, i) => {
  /* console.log(i); */

  return item;
});
const mapRes = tasks.map((item) => {
  return item.completed;
});
const filterRes = tasks.filter((item) => {
  if (item.completed == true) {
    return true;
  }
});

/* 
console.log("for each", eachRes);
console.log("map", mapRes);
console.log("filter", filterRes); */

const arr = [1, 2, 3];
/* arr.push(4); */
/* const newArr = arr.push(4); */
/* const newArr = [arr, 4]; // [[1,2,3],4]
const spreadArr = [...arr, 4]; // [1,2,3,4]
console.log(newArr);
console.log(spreadArr);

 */

const items = [
  {
    id: 1,
    task: "Eat breakfast",
  },
  {
    id: 2,
    task: "Drink coffee",
  },
  { id: 3, task: "Dring redbull" },
];
// Implement delete from todolist in react
function deleteFromArray(arr, id) {
  const newArr = arr.filter((item) => {
    if (item.id === id) {
      return false;
    } else {
      return true;
    }
  });
  return newArr;
}

const newItems = deleteFromArray(items, 2);
console.log(newItems);

/* const lastId = items[items.length - 1].id;
console.log(lastId + 1); */

/* const newItems = [...items, "Shower"];
console.log(newItems); */
