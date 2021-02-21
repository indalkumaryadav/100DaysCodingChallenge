class Engine:
    a=10
    def m1(self):
        print("Engine has a functionality")

class Car:
    def __init__(self):
        self.engine=Engine()
    
    def display(self):
        print(Engine.a)
        self.engine.m1()
        print(self.engine.a)
# c=Car()
# c.display()

class Car2:
    def __init__(self,name,model,color):
        self.name=name
        self.model=model
        self.color=color
    
    def getInfo(self):
        print(self.name)
        print(self.model)
        print(self.color)

class Employee:
    def __init__(self,eno,ename,car):
        self.eno=eno
        self.ename=ename
        self.car=car
    
    def empInfo(self):
        print(self.eno)
        print(self.ename)
        self.car.getInfo()
# c=Car2("Inova",20,"red")
# e=Employee(100,"indal",c)
# e.empInfo()


class X:
    a=20
    def __init__(self):
        self.b=20
    
    def m1(self):
        print("Instance method of Class X")

class Y:
    c=20
    def __init__(self):
        self.d=20
    
    def m2(self):
        print("Instance method of Class Y")
    
    def m3(self):
        x1=X()
        x1.m1()
        print(X.a)
        print(x1.b)

        print(Y.c)
        print(self.d)
# a=Y()
# a.m3()

class Parent:
    a=10
    def __init__(self):
        self.b=20
    
    def m1(self):
        print("instance methood")
    
    @staticmethod
    def m2():
        a='Local Variabele'
        print("Static Method")
        print(a)

    @classmethod
    def m3(cls):
        print(cls.a)
        print("Class method ")
    
class Child(Parent):
    pass

c=Child()
print(Parent.a)
print(c.a)
print(c.b)
c.m1()
c.m2()
c.m3()
