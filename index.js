const express = require("express");

// Create an instance of the Express application
const app = express();

//Get request to the root route ("/")
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// Listen your app on a specific server port (e.g., 4000)
app.listen("4000", () => {
	console.log("Server is running on port 4000");
});
