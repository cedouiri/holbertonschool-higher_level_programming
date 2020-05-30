#!/usr/bin/python3
'''
a Python script that fetches https://intranet.hbtn.io/status
The body of the response must be display like the
following example (tabulation before -)
'''
import requests

if __name__ == '__main__':
    url = "https://intranet.hbtn.io/status"
    r = requests.get(url)
    text = r.text
    print("Body response:")
    print("\t- type: {}".format(type(text)))
    print("\t- content: {}".format(text))
