const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr1, arr2];

console.log(newArr);

const propps = {
  name: "some name",
  imageUrl: "example.com",
};

const { name, imageUrl } = propps;
