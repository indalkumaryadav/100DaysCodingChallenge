import time
class Test:
    def __init__(self):
        print("Object Initialization.")
    
    def __del__(self):
        print("Object destructuor clean up activity")
# t=Test()
# t=None
# time.sleep(10)
# print("End of aplication")
t=Test()