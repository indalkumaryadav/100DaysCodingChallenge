class Human:
    def __init__(self):
        self.name="indal kumar"
        self.head=self.Head()
        self.brain=self.head.Brain()
        self.display=self.display()

    # def display(self):
    #     print(self.name)
    #     self.head.talk()
    #     self.brain.think()
        
        
    
    class Head:
        def talk(self):
            print("talking")
        
        class Brain:

            def think(self):
                print("Thinking")

class Person:
    def __init__(self,dd,mm,yy):
        self.dob=self.DOB(dd,mm,yy)
    
    def display(self):
        print(self.dob.display())
    

    class DOB:
        def __init__(self,dd,mm,yy):
            self.dd=dd
            self.mm=mm
            self.yy=yy
        
        def display(self):
            print(f"DOB:-{self.dd}-{self.mm}-{self.yy}")
            
        def indal(self):
            def cal(a,b):
                print("THe sum is ",a+b)
            
            cal(10,20)


p=Person(10,5,2000)
# print(p.display())
p.dob.indal()