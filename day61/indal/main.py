import emp,pickle

num=int(input('Enter number of employee :- '))
f=open("emp.dat","wb")

for i in range(num):
    eid=int(input("enter number if of employee:- "))
    ename=input("enter ename if of employee:- ")
    esal=int(input("enter esal if of employee:- "))
    eaddrs=input("enter eaddrs if of employee:- ")
    obj=emp.Employee(eid,ename,esal,eaddrs)
    data=pickle.dump(obj,f)
