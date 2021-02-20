print(0 and 20)
print(1 and 20)
print(4&5)
print(4^5)
print(~5)
print(~True)
print(10<<2)
print(10>>2)
print(15>>1)
print(5<<1)
print(10<<1)
print(10>>3)
a=10 if 10<1 else 50
print(a)
a=int(input("Enter number"))
b=int(input("Enter number"))
c=int(input("Enter number"))

min=a if a<b<c else b if b<a<c else b if c<a<b else c
max=a if a>b>c else b if b>c else b if a>b else c
print(min,max)
