import copy

l1=[10,20,30,40,50]
l2=copy.deepcopy(l1)
l2[0]='indal'
print(l1)
print(l2)