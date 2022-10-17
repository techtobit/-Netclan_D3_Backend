const express = require('express');
const router = express.Router();
const {
 getData
} = require('../Controller/LoadAllDataController')

router.get('/getData', getData)

module.exports = router;