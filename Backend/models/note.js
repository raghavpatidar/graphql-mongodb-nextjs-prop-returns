const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const houseSchema = new Schema(
  {
    price: {
      type: Number,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    noOfBeds: {
      type: Number,
      default: 1
    },
    noOfBathroom: {
      type: Number,
      default: 1
    },
    area: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("House", houseSchema);
