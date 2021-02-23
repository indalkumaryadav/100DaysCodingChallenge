from threading import *

def display():
    print("CHild Thread")

t=Thread()
t.start()
print(current_thread().ident)
print(t.ident)

class Test(Thread):
    def run(self):
        pass
t1=Test()
t1.start()
print(t1.ident)
print(active_count())