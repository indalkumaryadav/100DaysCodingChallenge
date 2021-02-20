class Student:
        
    def __init__(self,name,age,marks):
        self.name=name
        self.age=age
        self.marks=marks
    
    def talk(self):
        print("Student name is ",self.name)
        print("Student age is ",self.age)
        print("Student marks is ",self.marks)

s1=Student("Indal Kumar",22,90)
# s1.talk()
# name=s1.name
# print(len(name))
# s1.__init__("indal kumar",20,100)
