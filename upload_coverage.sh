#!/bin/bash

# Download and execute Codacy coverage reporter
bash <(curl -Ls https://coverage.codacy.com/get.sh) report -r ./coverage/lcov.info
