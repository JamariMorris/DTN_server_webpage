var AltitudeSensor = require('../model/model');
var HumiditySensor = require('../model/model');
var PressureSensor = require('../model/model');
var RainSensor = require('../model/model');
var TemperatureSensor = require('../model/model');
var UVSensor = require('../model/model');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//retrieve and return data from database
var db = require('../database/connection');
exports.AltitudeSensor = (req,res) =>
{
    db.AltitudeSensor
}
exports.HumiditySensor = (req,res) =>
{   
    HumiditySensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Humidity data"})})
}
exports.PressureSensor = (req,res) =>
{
    PressureSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Pressure data"})})
}

 exports.RainSensor = (req,res) =>
 {
    RainSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Rain data"})})
 }
    
exports.TemperatureSensor = (req,res) =>
{
     TemperatureSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving Temperature data"})})
}
   
exports.UVSensor = (req,res) =>
{
    UVSensor.data()
    .then(data =>{res.send(data)})
    .catch(err =>{res.status(500).send({message : err.message||"Error occured while retrieving UV data"})})

}
   