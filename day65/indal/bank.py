class Account:
    def __init__(self,name,balance):
        self.name=name
        self.balance=balance
    
    def deposit(self,amount):
        self.balance=self.balance+amount
    
    def withdraw(self,amount):
        if amount<=self.balance:
            self.balance=self.balance-amount
        else:
            print("no sufficiant balance in  your account.")
        return self.balance

c1=Account("Indal kumar",1000)
c1.deposit(1000)
print(c1.withdraw(200))