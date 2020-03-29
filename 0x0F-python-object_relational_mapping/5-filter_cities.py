#!/usr/bin/python3


import MySQLdb
from sys import argv

'''
lists all states with a name starting with N (upper N)
from the database hbtn_0e_0_usa
'''
if __name__ == "__main__":
    con = MySQLdb.connect(
        host="localhost", port=3306, user=argv[1],
        password=argv[2], database=argv[3])
    cursor = con.cursor()
    cursor.execute(
        "SELECT cities.name FROM cities \
        JOIN states ON cities.state_id = states.id WHERE states.name \
        LIKE %s ORDER BY cities.id", (argv[4],))
    db = cursor.fetchall()
    print(", ".join(i[0] for i in db))
    cursor.close()
    con.close()
