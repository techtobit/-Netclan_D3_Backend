const mongoose = require('mongoose');
const Data = require('../Model/DataModel')

// Load All Data
const getData = async (req, res) => {
 const loadData = await Data.find({});
 res.status(200).json(loadData)
}

module.exports = {
 getData
}