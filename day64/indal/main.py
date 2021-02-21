class Person:
    def __init__(self,name,age):
        self.name=name
        self.age=age


class Employee(Person):
    def __init__(self,name,age,eno,esal):
        super().__init__(name,age)
        self.eno=eno
        self.esal=esal
    
    def work(self):
        print("Python Developer.")

    def empInfo(self):
        print(self.name)    
        print(self.age)    
        print(self.eno)    
        print(self.esal)

e=Employee("Indal",10,200,800)
e.empInfo()