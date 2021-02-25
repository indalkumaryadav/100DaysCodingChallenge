from threading import *


def consumer(c):
    c.acquire()
    print("cosumer waiting for updation")
    c.wait()#now the thread entered into waiting state
    print("consumer get notification")
    c.release()



def produce(c):
    c.acquire()
    print("producer producing item")
    print("producer giving the notificatoin")
    c.notify()
    c.release()


c=Condition()


t1=Thread(target=consumer,args=(c,))
t2=Thread(target=produce,args=(c,))
t1.start()
t2.start()
