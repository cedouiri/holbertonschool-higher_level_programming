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
        "SELECT cities.id, cities.name, states.name FROM cities \
        JOIN states ON cities.state_id = states.id ORDER BY cities.id")
    db = cursor.fetchall()
    for i in db:
        print(i)
    cursor.close()
    con.close()
