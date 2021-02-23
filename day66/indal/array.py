list=[10,20,30,40,50]

# traversing the list
def traverse(array):
    for i in array:
        print(i)

# insertion in list
def insertion(array,item):
    array.append(item)

insertion(list,1)        
traverse(list)
