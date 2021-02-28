import pymysql

try:
    connect =pymysql.connect(
    host="localhost",
    database="mydatabase",
    user="root",
    password="indal",
    )
    cursor=connect.cursor()
    # cursor.execute("create table employee2(eno int(5),esal double(10,2))")
    query="insert into employee2 values(%s ,%s)"
    records=[
        (2,10.00),
        (23,130.00),
        (22,120.00),
        (21,100.00),
    ]
    cursor.executemany(query,records)
    connect.commit()
    print("Successfully Created table")

except pymysql.DatabaseError as e:
    print(e)

finally:
    pass