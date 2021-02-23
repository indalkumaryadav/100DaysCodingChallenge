# import threading

# print(threading.current_thread().getName())
from threading import *


def display():
    print(current_thread().getName())

print(current_thread().getName())
t=Thread(target=display)
t2=Thread(target=display)
t3=Thread(target=display)
t4=Thread(target=display)
t5=Thread(target=display)
t.start()
t2.start()
t3.start()
t4.start()
t5.start()