var Datadb = require('../model/model');

//retrieve and return data from database
exports.data = (req,res) =>
{
    AltitudeSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Altitude data"})})

    HumiditySensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Humidity data"})})

    PressureSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Pressure data"})})

    RainSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Rain data"})})

    TemperatureSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Temperature data"})})

    UVSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving UV data"})})
}