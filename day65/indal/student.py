class Student:
    def __init__(self,name,age):
        self.name=name
        self.age=age

    def __str__(self):
        return f"Your Name is {self.name} and your are is {self.age}"

# s1=Student('indal Kumar',22)
# print(s1)
import datetime
today=datetime.datetime.now()
p=repr(today)
d=eval(p)
print(d)