#!/usr/bin/python3
"""
a function that returns the number of lines of a text file
"""


def number_of_lines(filename=""):
    """
    number_of_lines 
    """
    i = 0
    with open(filename, "r", encoding="UTF8") as f:
        for line in f:
            i += 1
        return i


