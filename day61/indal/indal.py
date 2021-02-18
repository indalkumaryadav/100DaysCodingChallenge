import pickle
import emp
with open("emp.dat","rb") as r:
    obj=pickle.load(r)
    obj.display()