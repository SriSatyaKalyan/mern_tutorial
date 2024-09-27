# mern_tutorial

##

###

####

##### GLOBALS - NO WINDOW

- __dirname - path to current directory
- __filename - file name
- require - function to use modules (CommonJS)
- module - info about current module
- process - info about env where the program is being executed

##### NPM

- npm - global command, comes with node
- npm --version
- local dependency - use it only in this particular project
  - `npm i <packageName>`
- global dependency - use it in any project
  - `npm install -g <packageName>`
  - `sudo install -g <packageName>` (mac)

- package.json
  - manifest file (stores important info about project/package)
  - manual approach (create package.json in the root, create properties etc.)
  - npm init (step by step, press enter to skip)
  - npm init -y (everything default)
  - devDependencies are the dependencies used during development. dependencies are the ones that matter to the project
  `
    "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },`
