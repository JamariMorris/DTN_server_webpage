const express = require('express');
const route = express.Router()
const services = require('../services/render');

/**
 * @description Root Route
 * @method GET/
 */
route.get('/',services.homeRoutes);

route.get('/get-data',services.get_data);

module.exports = route