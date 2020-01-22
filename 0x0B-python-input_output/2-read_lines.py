#!/usr/bin/python3
"""
a function that reads n lines of a text file
(UTF8) and prints it to stdout
"""


def read_lines(filename="", nb_lines=0):
    """
    a function that reads n lines
    """
    with open(filename, encoding="utf-8") as f:
        i = 0
        for line in f:
            if nb_lines != 0 and i == nb_lines:
                break
            print(line, end="")
            i += 1
