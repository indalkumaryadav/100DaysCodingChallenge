import 'indal.dart';

void main(){
  // Student std1=new Student();
  // Parent pr=Parent();
  // var indal;
  // indal="Indal Kumar";
  // print(indal);
  // pr.method1();
  print(add(10,2));
}

class Parent{
  void method1(){
    print("Method 1 called");
  }
}


int add(int a, int b){
  return a+b;
}

