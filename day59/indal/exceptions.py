try:
    print(10/0)

except (ZeroDivisionError,ValueError) as msg:
    print(msg)

# except ZeroDivisionError as msg:
#     print(f"Error occured {msg}")

class TooYoungException(Exception):
    def __init__(self,args):
        self.msg=args

class TooOldException(Exception):
    def __init__(self,args):
        self.msg=args
age=int(input("Enter age\n"))
if age>60:
    raise TooOldException("Please wait sometime you will get best mathch..")
elif age<18:
    raise TooOldException("You Already Crossed ")
else:
    print("Thanks for registration")