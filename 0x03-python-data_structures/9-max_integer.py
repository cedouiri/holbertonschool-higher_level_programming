#!/usr/bin/python3
def max_integer(my_list=[]):
    _len = len(my_list)

    if _len == 0:
        return None
    else:
        maxn = my_list[0]
    for i in range(1, _len):
        if my_list[i] > maxn:
            maxn = my_list[i]
        return maxn
