#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    cp = a_dictionary.cp()
    for value in cp:
        cp[value] *= 2
    return cp
