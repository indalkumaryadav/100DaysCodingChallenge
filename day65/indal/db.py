from test import DBInterface
import time

class MySQLDB(DBInterface):

    def connect(self):
        print("Connecting...")
    
    def dis_connect(self):
        print("disconnected")

class OracleDB(DBInterface):

    def connect(self):
        print("Connecting...")
    
    def dis_connect(self):
        print("disconnected")

class SQLiteDB(DBInterface):

    def connect(self):
        print("Connecting...")
    
    def dis_connect(self):
        print("disconnected")

class GraphQLDB(DBInterface):

    def connect(self):
        print("Connecting...")
    
    def dis_connect(self):
        print("disconnected")

mysql=MySQLDB()
mysql.connect()
time.sleep(10)
mysql.dis_connect()