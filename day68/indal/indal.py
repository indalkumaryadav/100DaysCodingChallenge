from threading import *
import time

# s=Semaphore()
s=Semaphore(3)

def wish(name):
    s.acquire()
    for i in range(10):
        print("Good Morning,",end="")
        time.sleep(2)
        print(name)
    s.release()
t=Thread(target=wish,args=("Indal",))
t2=Thread(target=wish,args=("Arya",))
t3=Thread(target=wish,args=("Iron Man",))
t4=Thread(target=wish,args=("Virat",))
t.start()
t2.start()
t3.start()
t4.start()