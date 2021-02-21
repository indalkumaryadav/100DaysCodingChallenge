class Book:
    def __init__(self,pages):
        self.pages=pages
    
    def __add__(self,other):
        total= self.pages+other.pages
        return Book(total)

    def __mul__(self,other):
        return self.pages*other.pages
        
    def __truediv__(self, other):
        return self.pages/other.pages

    def __len__(self):
        return len(self.pages)
b1=Book(100)
b2=Book(200)
b3=Book(200)
# print(b2*b1)
# print(b2/b1)
total=b1+b2+b3
print(total.pages)