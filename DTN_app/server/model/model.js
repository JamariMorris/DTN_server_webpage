const mongoose = require('mongoose');

const altitude_schema = new mongoose.Schema
({
    Time:
    {
        type: String,
    },
    Date:
    {
        type: String,
    },
    Altitude:
    {
        type: String
    },
})
const humidity_schema = new mongoose.Schema
({
    Time:
    {
        type: String,
    },
    Date:
    {
        type: String,
    },
    Humidity:
    {
        type: String
    },
})
const pressure_schema = new mongoose.Schema
({
    Time:
    {
        type: String,
    },
    Date:
    {
        type: String,
    },
    Pressure:
    {
        type: String
    },
})
const rain_schema = new mongoose.Schema
({
    Time:
    {
        type: String,
    },
    Date:
    {
        type: String,
    },
    state:
    {
        type: String
    }
})
const temperature_schema = new mongoose.Schema
({
    Time:
    {
        type: String,
    },
    Date:
    {
        type: String,
    },
})
const uv_schema = new mongoose.Schema
({
    Time:
    {
        type: String,
    },
    Date:
    {
        type: String,
    },
    UV_Sensor_Data:
    {
        type: String
    },
})

const AltitudeSensor =  mongoose.model('AltitudeSensor',altitude_schema);
const HumiditySensor =  mongoose.model('HumiditySensor',humidity_schema);
const PressureSensor =  mongoose.model('PressureSensor',pressure_schema);
const RainSensor =  mongoose.model('RainSensor',rain_schema);
const TemperatureSensor =  mongoose.model('TemperatureSensor',temperature_schema);
const UVSensor =  mongoose.model('UVSensor',uv_schema);


module.exports = 
{
    AltitudeSensor, HumiditySensor, PressureSensor, RainSensor, TemperatureSensor, UVSensor
}