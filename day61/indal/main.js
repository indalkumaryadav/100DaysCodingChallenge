class Student {
  constructor(name, age, rollno) {
    this.name = name;
    this.age = age;
    this.rollno = rollno;
  }
  hello() {
    return "indal";
  }
}
const indal = () => {
  let indal = "my arrow function";
  return indal;
};
const obj = {
  name: "Object",
  age: 20,
  rollno: 100,
};
let std1 = new Student("indal kumar", 20, 101);
let std2 = new Student("Arya kumar", 20, 101);
let std3 = new Student(obj, obj, obj);
console.log(std3);
