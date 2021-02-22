class Book:
    def __init__(self,pages):
        self.pages=pages
    
    def __str__(self):
        return str(self.pages)
        
b1=Book(100)
print(b1)