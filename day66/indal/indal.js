// static method in javascript

class Indal {
  static mufun() {
    return -1;
  }
}
// console.log(Indal.mufun());

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Child extends Parent {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}
let c1 = new Child("indal", 10, 20);
console.log(c1);
