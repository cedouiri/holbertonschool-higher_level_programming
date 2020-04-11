#!/bin/bash
# display status
curl -sX POST -H "Content-Type: application/json" "$1" -d @"$2"
