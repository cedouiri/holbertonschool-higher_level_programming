#!/usr/bin/python3
'''
Python script that takes in a letter and sends a POST request
to http://0.0.0.0:5000/search_user with the letter as a parameter
'''
import requests
from sys import argv

if __name__ == '__main__':
    url = "https://api.github.com/repos/{}/{}/commits".format(argv[2], argv[1])
    r = requests.get(url)
    commits = r.json()
    for commit in commits[:10]:
        print(commit.get('sha'), end=': ')
        print(commit.get('commit').get('author').get('name'))
