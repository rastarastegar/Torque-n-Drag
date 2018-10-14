const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const WellSchema = new Schema({
  // Lat
  latitude: {
    type: String
    // required: true,
  },

  // Long
  longitude: {
    type: String
    // required: true,
  },
  // Well Name
  wellName: {
    type: String
    // required: true,
  },
  // Well Name
  wellUWI: {
    type: String
    // required: true,
  },

  // Location description
  wellLocation: {
    type: String
    // required: true,
  },
  // surveyData
  surveyData: {
    type: Array
    // required: true,
  },
  // Comment description
  // pipeData
  pipeData: {
    type: Object
    // required: true,
  },
  comment: {
    type: String
    // required: true,
  }

  // `survey` is an object that stores a Survey id
  // The ref property links the ObjectId to the Survey model
  // This allows us to populate the Survey with an associated Well

  // survey: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Survey"
  // }]
});

// This creates our model from the above schema, using mongoose's model method
const Well = mongoose.model("Well", WellSchema);

// Export the Note model
module.exports = Well;
