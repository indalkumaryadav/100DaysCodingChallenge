# class P:
#     a=10
#     def __init__(self):
#         self.name="Indal Kumar"
#         self.age=22
#     def m3(self):
#         print("instance method of P class")
#     @classmethod
#     def m1(cls):
#         print("Class Method of P")
    
#     @staticmethod
#     def m2():
#         print("Indal Kumar")
    
# class C(P):
#     def __init__(self):
#         super().__init__()
#         print("static varibale of parent class: -",super().a)
        
    
    # def display(self):
    #     super().m2()
class A:
    def m1(self):
        print("A method")
class B(A):
    def m1(self):
        print("B method")
class C(B):
    def m1(self):
        print("C method")
class D(A):
    def m1(self):
        super(B,self).m1()
d=D()
d.m1()