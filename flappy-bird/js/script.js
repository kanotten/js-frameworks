const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
//Drawuing a box
//         x   y   Width height

const button = document.querySelector("button");
button.addEventListener("click", () => {
  c.fillRect(Math.random() * 350, 50, 50, 50);
  console.log(Math.random() * 10);
});
