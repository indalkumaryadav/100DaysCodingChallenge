class Employee:
    def __init__(self,eid,ename,esal,eaddrs):
        self.eid=eid
        self.ename=ename
        self.esal=esal
        self.eaddrs=eaddrs
    
    def display(self):
        print(self.eid)
        print(self.ename)
        print(self.esal)
        print(self.eaddrs)
    