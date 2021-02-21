class Test:

    def __init__(self,name,age):
        self.name=name
        self.age=age
    
    def display(self):
        print(self.name)
        print(self.age)
    

# class Employee:

    # def modify(emp):
    #     emp.age=emp.age+5
    #     emp.display()

# t=Test("Indal kumar",20)
# e=Employee.modify(t)


import gc

print(gc.isenabled())