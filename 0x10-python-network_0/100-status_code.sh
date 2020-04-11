#!/bin/bash
# sends a POST request to the passed URL
curl -s "$1" -w '%{http_code}' -o /dev/null
