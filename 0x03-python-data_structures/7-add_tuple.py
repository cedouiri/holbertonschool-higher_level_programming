#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    ta1 = ta2 = tb1 = tb2 = 0

    try:
        ta1 = tuple_a[0]
    except:
        ta1 = 0
    try:
        tb1 = tuple_b[0]
    except:
        tb1 = 0
    try:
        ta2 = tuple_a[1]
    except:
        ta2 = 0
    try:
        tb2 = tuple_b[1]
    except:
        tb2 = 0
    return ((ta1 + tb1), (ta2 + tb2))
