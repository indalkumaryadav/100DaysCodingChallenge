from threading import *
import time
class Test(Thread):
    def run(self):
        pass
    def display(self):
        time.sleep(10)
        for i in range(10):
            print(
                "Hello"
            )
t=Test()
t.start()
print(t.is_alive())
t.display()