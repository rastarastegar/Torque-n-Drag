const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const SurveySchema = new Schema({
  // Lat
  measuredDepth: {
    type: Number,
    required: true,
},

  // Long
  inclination: {
    type: Number,
    required: true,
},
  // Well Name
  azimuth: {
    type: String,
    required: true,
},

});

// This creates our model from the above schema, using mongoose's model method
const Survey = mongoose.model("Survey", SurveySchema);

// Export the Note model
module.exports = Survey;
