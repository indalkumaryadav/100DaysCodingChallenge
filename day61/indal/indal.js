function circleDraw(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}
// const circle = circleDraw(1);
// circle.draw();
// constructor function

// const another = new Circle(5);
// console.log(another.constructor);

// let s = {};

// new String();

// new Array();

// new FormData();
// new Boolean();
// const FLAG = true;

// const newfun = new Function();

// Circle.apply({}, []);

let x = { value: 10 };
let y = x;

// console.log((x.value = 20));

function increase(num) {
  num++;
}
// increase(10);
let obj = {
  name: "indal",
  age: 20,
};
// for (let key in obj) {
//   console.log(key);
// }
function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw constructor function");
  };
}
const sw = new StopWatch();
