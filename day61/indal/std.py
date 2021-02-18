# class Student:
#     ''' this is realted to student class'''

# print(Student.__doc__)
# help(Student)

# instance varibale
# local variable
# static varibales

# instance method
# static method 
# Class method

class Student:
    ''' developed by indal kumar  yadav'''
    def __init__(self):
        self.age=20,
        self.name="Indal Kumar"
        self.rollno=102
        self.marks=90
        print(id(self))

    def talk(self):
        print("Your Age is :- ",self.age)
        print("Your Name is :- ",self.name)
        print("Your rollno is :- ",self.rollno)
        print("Your marks is :- ",self.marks)
        print(id(self))



# createing an object 
s=Student()
# s is a reference variable
s.talk()
print(id(s))