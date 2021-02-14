# # # name=int(input("enter something \n")).split()

# # from sys import argv

# # # sum=0
# # # for x in argv[1:]:
# # #     sum=sum+int(x)
# # # print(sum)

# # kumar="kumar"
# # name=f"indal {kumar}"
# # f="hello my name  is {1} kumar and age is {0}".format("indal",20)

# # # n=int(input("enter number \n"))
# # # sum=0
# # # i=1
# # # while i<=n:
# # #     sum=sum+i
# # #     i=i+1

# # # nested Loop python
# # # for i in range(10):
# # #     for j in range(10):
# # #         print(i,j)


# # # rows=int(input("Enter number of rows:- \n"))

# # # for i in range(1,rows+1):
# # #     for j in range(1,rows+1):
# # #         print("*",end='')
# # #     print()

# # # d={
# # #     'name':'indal kumar',
# # #     'age':20
# # # }
# # # for i,j in d.items():
# # #     print(i,j)


# # l=[1,2,5,3,5]
# # l2=[10,10]
# # # l2.extend(l)
# # # print(l2)
# # # print(l2.remove(10))

# l=[[1,2,3],[1,2,3],[1,2,3]]

# # for x in range(len(l)):
# #     for y in range(len(x)):
# #         print(x,y)
# #     print()

# # t=()
# # print(type(t))
# # tuple=10,20,30,40,50,60
# # t1=(10,20,30)
# # t2=tuple(sorted(t1))
# # print(t1+t2)
# # print(tuple)
# # print(t2)

# a=10
# b=20
# c=30
# d=40
# t1=a,b,c,d
# print(t1)

# r,f,g,h=t1
# print(r,f,g,h)

# indal="indal kumar"
# t2=indal
# print(t2)

t1=[ x+3 for x in range(10) if x%2==0]
print(t1)