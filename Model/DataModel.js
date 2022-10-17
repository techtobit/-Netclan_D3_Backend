const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Data = new Schema({
 end_year: {
  type: Number,

 },

 intensity: {
  type: Number,

 },
 sector: {
  type: String,

 },
 topic: {
  type: String,

 },
 insight: {
  type: String,

 },

 url: {

 },

 region: {
  type: String,

 },
 start_year: {
  type: Number,

 },
 impact: {
  type: String,

 },

 added: {
  type: String,

 },
 published: {
  type: String,

 },
 country: {
  type: String,

 },
 relevance: {
  type: Number,

 },
 pestle: {
  type: String,

 },
 source: {
  type: String,

 },
 title: {
  type: String,

 },
 likelihood: {
  type: Number,
 }

}, { timestamps: true });

module.exports = mongoose.model("jsonData", Data)


