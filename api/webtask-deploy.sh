#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    echo "Missing argument: Which webtask do you want to update?"
    exit 0
fi

#Invoke with `npm run webtask-deploy weather` for example
#This will copy the file api/weather.js to webtask's servers and update the weather webtask
wt update $1 "webtask/$1.js"
