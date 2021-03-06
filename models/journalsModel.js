"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalsSchema = new Schema({
  title: {
    type: String,
    required: "Kindly enter the name of the title",
  },
  description: {
    type: String,
    required: "Kindly enter the name of the description",
  },
  author: {
    type: String,
    required: "Kindly enter the name of the author",
  },
  images: {
    type: Array,
    required: "Kindly enter the name of the images",
  },
  types: {
    type: Array,
    required: "Kindly enter the name of the images",
  },
  levels: {
    type: Array,
    required: "Kindly enter the name of the images",
  },
  subjects: {
    type: Array,
    required: "Kindly enter the name of the images",
  },
  school: {
    type: String,
    required: "Kindly enter the name of the school",
  },
  province: {
    type: String,
    required: "Kindly enter the name of the province",
  },
  price: {
    type: Number,
    required: "Kindly enter the name of the price",
  },
  numberOfPages: {
    type: String,
    required: "Kindly enter the name of the number of pages",
  },
  city: {
    type: String,
    required: "Kindly enter the name of the city",
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Number,
    required: "Kindly enter the name of the number",
  },
});

module.exports = mongoose.model("Journal", JournalsSchema);
