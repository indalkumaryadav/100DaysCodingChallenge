from abc import ABC,abstractclassmethod

class Test(ABC):

    @abstractclassmethod
    def m1(self):
        pass
    @abstractclassmethod
    def m2(self):
        pass

class A(Test):
    def m1(self):
        print("hello")
class AA(A):
    def m2(self):
        print("hello")
a=AA()
a.m1()
a.m2()