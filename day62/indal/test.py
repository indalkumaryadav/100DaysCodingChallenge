class Test:
    count=0
    def __init__(self):
        print("Constructor called.")
        Test.count=Test.count+1
        # count +=1
    
    @classmethod
    def m1(cls):
        print("Classmethod.")
    @classmethod
    def noOFObjects(cls):
        print(cls.count)
t=Test()
t2=Test()
t3=Test()
print("numner of objects created",Test.count)
Test.noOFObjects()