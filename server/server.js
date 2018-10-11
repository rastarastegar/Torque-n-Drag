const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("../routes/index");
const cors = require('cors');
// const port = process.env.PORT || 4000;
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/torquendrag";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// //mongoose.connect("mongodb://localhost/torque_n_drag", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));
app.use(cors());

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });






// Add routes, both API and view
// Define API routes here
app.get('/', (req,res) => {
  return res.end('Api working');
})
// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
app.use(routes);


// require("../routes/index")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// app.listen(port, () => {
//     console.log("Server is listening on port:" + port);
// });

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });