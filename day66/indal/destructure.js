const obj = {
  name: "Indal Kumar Yadav",
  age: 22,
  marks: "fail",
  m1: function () {
    console.log("Hello");
    return "returned";
  },
};

const { name, age, marks, m1 } = obj;
// console.log(m1());

let obj2 = [
  {
    name: "Indal",
    age: 22,
  },
];
let obj3 = [
  {
    marks: 80,
  },
];
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
const indalkumar = [...obj2, { hello: 22 }, ...obj3, 10, 20];

console.log(indalkumar);
