class P:
    a=10
    def __init__(self):
        self.name="Indal kumar"

    def display(self):
        print("methods")
class C(P):
    def m1(self):
        print(super().a)
        super().display()
c=C()
c.m1()