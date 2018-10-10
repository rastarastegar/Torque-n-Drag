const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();


const publicPath = path.join(__dirname, '../public');
// const port = process.env.PORT || 4000;
const PORT = process.env.PORT || 3001;

app.use(express.static(publicPath));
app.use(cors());

// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// app.listen(port, () => {
//     console.log("Server is listening on port:" + port);
// });

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });