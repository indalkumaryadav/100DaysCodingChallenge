from threading import *
import time

e=Event()
def consumer():
    print("indal")
    e.wait()
    print("hello lin 4")
def producer():
    print("indal kumar")
    print("hello")
    e.set()
t1=Thread(target=consumer)
t2=Thread(target=producer)
t1.start()
t2.start()