// importing express and allowing app to use express
const express = require("express");
const app = express();
const port = 8000;


// allows express access to POST data i.e. get info from submitted forms
app.use( express.json() ); // tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); // tells my app that it can gather form information


// importing db using mongoose
require("./server/config/jokes.config");


// importing routes and passing in app
require("./server/routes/jokes.routes")(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );