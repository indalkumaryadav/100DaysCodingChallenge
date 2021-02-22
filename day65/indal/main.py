class Book:
    def __init__(self):
        pass
    def sum(self,*args,**kwargs):
        sum=0
        for i in args:
            sum=sum+i
        return sum,kwargs

class A:
    def __init__(self):
        print("somthing")

class B(A):
    def __init__(self):
        super().__init__()
        print("somthing")
        
from abc import *
class Test(ABC):
    pass