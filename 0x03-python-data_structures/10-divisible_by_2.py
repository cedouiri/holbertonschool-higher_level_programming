#!/usr/bin/python3
def divisible_by_2(my_list=[]):
    checkd = []

    for i in range(len(my_list)):
        if my_list[i] % 2 == 0:
            checkd.append(True)
        else:
            checkd.append(False)
    return (checkd)
