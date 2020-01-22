#!/usr/bin/python3
"""
a class Student that defines a student by: (based on 11-student.py)
"""


class Student:
    """
    a class Student that defines a student
    """
    def __init__(self, first_name, last_name, age):
        """
        Instantiation with first_name, last_name and age
        """
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """
        Public method that retrieves a dictionary
        representation of a Student instance
        """
        if attrs is not None:
            return {i: j for i, j in self.__dict__.items() if i in attrs}
        else:
            return self.__dict__

    def reload_from_json(self, json):
        for key in json.key():
            self.__dict__[key] = json[key]
