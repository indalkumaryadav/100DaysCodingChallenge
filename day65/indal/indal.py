from abc import ABC,abstractclassmethod
    
class Vehicle(ABC):

    @abstractclassmethod
    def get_no_of_wheels(self):
        pass


class Bus(Vehicle):

    def get_no_of_wheels(self):
        return 6
class Auto(Vehicle):
    def get_no_of_wheels(self):
        return 3
b=Bus()
a=Auto()

print(b.get_no_of_wheels())
print(a.get_no_of_wheels())