# Express Server Setup Guid

This is basically a learning-based project. In it, I will try to build a server using Express.js, and the step-by-step documentation is provided below.

[![npm version](https://img.shields.io/npm/v/nodemon.svg)](https://www.npmjs.com/package/nodemon)

## Installation

Steps to install and set up the project.

### Node.js Project

1. Setup a NodeJs project first
    ```bash
    npm init -y
    ```
2. Create a index.js file
    ```bash
    console.log("Hello, World!");
    ```
3. Configure the package.json file
    ```bash
    "scripts": {
        "start": "node index.js"
    },
    ```
4. Check output:
    ```bach
    npm run start
    or
    npm start
    ```
    It will return into terminal: `Hello, World!`

Congratulation! Nodejs project is setup done.

### Setup Express.js

1. `npm i express`
2. Check your Node.js version and set that into your package.json file
    ```bash
    "engines": {
        "node": "22.19.0"
    }
    ```

## Creating Server

Create server through index.js file. Example codes are bellow

#### Common js

```bash
const express = require("express");

// Create an instance of the Express application
const app = express();

// Listen your app on a specific server port (e.g., 4000)
app.listen("4000", () => {
	console.log("Server is running on port 4000");
});
```

### Routes

Create your routes through "index.js" file, for initial testing

```bash
//Get request to the root route ("/")
app.get("/", (req, res) => {
	res.send("Hello, World!");
});
```

## Run Server using Nodemon

Use the Nodemon package to prevent the server from restarting manually after every modification. Install Nodemon as a development dependency using below command.

```bash
npm i -D nodemon
```

After installing nodemon package, configure package.json file

```bash
"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js" //Add this command
	},
```

## Usage

How to use the project (commands, examples).

## Features

- Feature 1
- Feature 2

## Contributing

Guidelines for contributors.

## License

Project license (e.g., MIT).
