from threading import *

# print(current_thread().isDaemon())

def job():
    print("Hello")

t=Thread(target=job)
t.setDaemon(True)
print(t.daemon)