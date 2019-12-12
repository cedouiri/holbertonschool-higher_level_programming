#!/usr/bin/python3

import hidden_4

l = dir(hidden_4)

if __name__ == "__main__":
    for i in range(0, len(l)):
        if l[i][0] != "_" and l[i][1] != "_":
            print(l[i])
