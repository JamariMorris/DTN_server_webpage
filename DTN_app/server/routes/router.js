const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET/
 */
route.get('/',services.homeRoutes);

/**
 * @description for get data
 * @method GET /get-data
 */
route.get('/get-data',services.get_data);

route.get('/api/AltitudeSensor', controller.AltitudeSensor);
route.get('/api/HumiditySensor', controller.HumiditySensor);
route.get('/api/PressureSensor', controller.PressureSensor);
route.get('/api/RainSensor', controller.RainSensor);
route.get('/api/TemperatureSensor', controller.TemperatureSensor);
route.get('/api/UVSensor', controller.UVSensor);

module.exports = route