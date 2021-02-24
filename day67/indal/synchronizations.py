from threading import *
import time
l=Lock()
def wish(name):
    l.acquire()
    for i in range(10):
        print(f"hello {i}",end="")
        time.sleep(3)
        print(name)
    l.release()
t1=Thread(target=wish,args=("Indal Kumar",))
t2=Thread(target=wish,args=("Arya Kumar",))
t3=Thread(target=wish,args=("Raina Kumar",))
t4=Thread(target=wish,args=("s Kumar",))
t1.start()
t2.start()
t4.start()
t3.start()