class Test:
    a=10
    def __init__(self):
        self.name="Indal kumar"
        self.age=20
        Test.b=50
    
    def indal(self):
        Test.m=10

    @classmethod
    def m2(cls):
        Test.f=50
        cls.r=50
        print("Class Method")
    
    @staticmethod
    def m3():
        Test.s=20
        print("Static Method")

print(Test.__dict__)
t=Test()
t.a="indal kumar"
print(t.__dict__)
print(t.a,t.name,t.age,end=" ")
# withoutcreateing object
print(Test.a)
print("Object 2")
t2=Test()
print(t2.a)