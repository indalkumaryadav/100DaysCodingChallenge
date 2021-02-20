class Teacher {
  constructor() {
    console.log("I am Teacher");
  }
}

class Student {
  constructor(a, b, c) {
    // super();
    this.name = a;
    this.age = b;
    this.marks = c;
  }

  show() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.marks);
  }
}

s1 = new Student("Indal Kumar Yadav", 22, 90);
s1.show();
