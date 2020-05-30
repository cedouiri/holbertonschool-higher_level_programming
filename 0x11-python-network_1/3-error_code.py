#!/usr/bin/python3
'''
sends a POST request to the passed URL with the email as a parameter
and displays the body of the response (decoded in utf-8)
'''
import urllib.error
import urllib.request
from sys import argv

if __name__ == "__main__":
    req = urllib.request.Request(argv[1])
    try:
        with urllib.request.urlopen(req) as r:
            print(r.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        print("Error code: {}".format(e.code))
