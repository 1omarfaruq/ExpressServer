const express = require("express");

// Create an instance of the Express application
const app = express();

// Listen your app on a specific server port (e.g., 4000)
app.listen("4000", () => {
	console.log("Server is running on port 4000");
});
