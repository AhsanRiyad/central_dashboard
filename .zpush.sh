#!/bin/bash

read -p 'Enter commit msg ' commitMsg;

git add .;
git commit -m "$commitMsg";
git push;
