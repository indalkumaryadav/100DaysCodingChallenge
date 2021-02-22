from abc import ABC,abstractclassmethod

class DBInterface(ABC):

    @abstractclassmethod
    def connect(self):
        pass
    
    @abstractclassmethod
    def dis_connect(self):
        pass