import time
from threading import *
def wish(name):
    for i in range(10):
        print(f"hello {i}",end="")
        time.sleep(5)
        print(name)

t1=Thread(target=wish,args=("Indal Kumar",))
t2=Thread(target=wish,args=("Indal Kumar",))
t1.start()
t1.join()
t2.start()