const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( cors());


// importing db using mongoose
require("./server/config/products.config");


// importing routes and passing in app
require("./server/routes/products.routes")(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );