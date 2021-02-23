from threading import *

class MyThread(Thread):
    
    def run(self):
        for i in range(10):
            print(current_thread().getName())

t1=MyThread()
t1.start()
for i in range(10):
    print("Hello World.")