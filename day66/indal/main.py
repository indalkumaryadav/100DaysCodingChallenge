from threading import *

class Test:
    def display(self):
        for i in range(10):
            print("Hello World.")

t1=Test()
obj=Thread(target=t1.display)
obj.start()