# class Test:
#     _x=10

#     def __init__(self):
#         self._y=20
# t=Test()
# print(t._x)
# print(t._y)

class Test2:
    __x=10
    def __init__(self):
        self.__y=20

t=Test2()
print(Test2.__dict__)
print(t.__dict__)
print(t._Test2__y)