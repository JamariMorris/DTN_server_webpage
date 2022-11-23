const mongoose = require('mongoose');

var altitude_schema = new mongoose.Schema
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
var humidity_schema = new mongoose.Schema
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
var pressure_schema = new mongoose.Schema
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
var rain_schema = new mongoose.Schema
({
    Time:
    {
        type: String,

    },
    Date:
    {
        type: String,


    },
    Rain_Code:
    {
        type: Number,
    },
    state:
    {
        type: String
    }
})
var temperature_schema = new mongoose.Schema
({
    Time:
    {
        type: String,

    },
    Date:
    {
        type: String,


    },
    Temperature:
    {
        type: String
    },
})
var uv_schema = new mongoose.Schema
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
const Datadb =  mongoose.model(datadb,schema);
module.exports = Datadb;