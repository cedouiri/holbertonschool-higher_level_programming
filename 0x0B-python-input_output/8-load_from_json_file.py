#!/usr/bin/python3
import json
"""
a function that creates an Object from a JSON file
"""


def load_from_json_file(filename):
    """
    a function that creates an Object
    """
    with open(filename, "r") as f:
        return json.load(f)
