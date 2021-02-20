class Test:
    def __init__(self):
        self.name="Indal kumar"
        self.age=22
    

    def display(self):
        print(self.name)
        self.grade()
    
    def grade(self):
        print("grade")





class MyClass:
    def setName(self,name):
        self.name=name
    
    def getName(self):
        return self.name
    
    def setMarks(self,mark):
        self.mark=mark
    
    def getMarks(self):
        return self.mark

list=[]
n=int(input('Enter number of student'))
for i in range(n):
    s=MyClass()
    name=input('Enter number of name')
    marks=int(input('Enter number of marks'))
    s.setName(name)
    s.setMarks(marks)
    list.append(s)

for i in list:
    print(i.getName())
    print(i.getMarks())