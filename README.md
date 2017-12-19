# NOTES

## LET
- Keyword to use instead of var
- Localizes the scope of the variable
- Example: let i = 0 inside for loop
    - i will not exist outside of the for loop
- Ties variables to blocks of code
    - if-else
    - while loops
    - for loops
    - functions
- Using var -- automatically sets variables in code to 'undefined' until you reassign (hoisting)
- Using let -- will tell you if a variable was not defined at all (Doesn't exist)
    - will also STOP the code instead of letting it continue
- Global lets work similarly to global variables
    - can still use variables defined in the global scope inside other blocks of code

## CONST
- Use keyword const to declare variables that can't be changed (can only be assigned once)
- Convention to capitalize constants in code
    - Example: let MAX_USERS = 3;

## FOR LOOPS
- arrays: for(let person of people)
    - 'person' is each instance in the array.
    - logging person will return that specific value of the array
- objects: for(let index in people)

## ARROW FUNCTION



## EXPRESS STEPS
- [ ] Terminal: git init
- [ ] Terminal: npm init
    - can't use spaces or capital letters in name
    - creates package.json
- [ ] VSCode: Create 'server' folder in the root folder
- [ ] VSCode: Create 'server.js' in the 'server' folder
- [ ] Terminal: npm install express --save
    - adds express to dependencies in package.json
    - adds node_modules folder to root folder
- [ ] Create .gitignore file
- [ ] Make sure 'node_modules' is ignored
- [ ] Also ignore 'DS_Stores'


- [ ] server.js: Taking all of express and storing it into a variable
    - const express = require('express');
- [ ] server.js: Create an express app
    - const app = express();
- [ ] server.js: Create a port
    - const port = 45678;
    - (any number between 1000 and 99999 except 5432 because SQL uses that)
- [ ] server.js: spin up server
    - app.listen(port, ()=>{
        console.log('server up on: ', port);
    });
    - above uses arrow function
- [ ] Terminal: node server/server.js
    - runs the server.js file in the server folder
- [ ] package.json: add start script
    - "start": "node server/server.js"
- [ ] set up folder structure (seen below)

## FOLDERS
- server
    - public
        - index.html
        - scripts
            - client.js
        - vendors
            - jquery-3.2.1.min.js
        - styles
            - style.css