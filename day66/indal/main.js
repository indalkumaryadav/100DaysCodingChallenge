class Parent {
  constructor() {
    console.log("Parent Class");
  }
}
class Child extends Parent {
  constructor() {
    super();
    console.log("Child Class");
  }
}
c1 = new Child();
