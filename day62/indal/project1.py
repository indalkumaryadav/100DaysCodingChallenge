import  sys
class Customer:
    '''  customer class for bank operation  '''

    bank="Indal Corperation Bank of India"

    def __init__(self,name,balance=0.0):
        self.name=name
        self.balance=balance

    def deposit(self,amount):
        self.balance = self.balance+amount
        print('The Balance After Deposit ',self.balance)

    def withdraw(self,amount):
        if amount==10000:
            if amount<=self.balance:
                self.balance=self.balance-amount
                print("Balance withdraw ",amount)
        
            else:
                print("Insufficiant amount in your bank account")
        else:
            print("Amount between 1 to 10000 per day ")
        print("Your balance is ", self.balance)

print("Welcome TO",Customer.bank)
name=input("Enter Customer name:- ")
c1=Customer(name)

while True:
    print('Choose any option to perform certain action')
    print('d- Deposit')
    print('W- WithDraw')
    print('e- Exit')
    option=input("Choose any option to perform certain action :- ")
    if option =='d':
        amount=float(input("Enter amount:- "))
        c1.deposit(amount)
    elif option=='w':
        amount=float(input('Enter amount to withdraw:- '))
        c1.withdraw(amount)
    elif option=='e':
        sys.exit()
    else:
        print('Choose Valid option ')