const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const UserSchema = new Schema({

    // `firstName` is required and of type String
    firstName: {
        type: String,
        // required: true,
    },

    // `lastName` is not required and of type String
    lastName: {
        type: String,
        required: false
    },


    // `email` is not required and of type String
    email: {
        type: String,
        required: false
    },

    uid:{
        type: String,
        required: false
    },

    // `well` is an object that stores a Well id
    // The ref property links the ObjectId to the Well model
    // This allows us to populate the User with an associated Well


      well: [{
        type: Schema.Types.ObjectId,
        ref: "Well"
      }]


});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
