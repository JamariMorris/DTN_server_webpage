const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const connectDB = async() =>
{
    try
    {
        MongoClient.connect(url, function(err, db) 
        {
            if (err) throw err;
            var dbo = db.db("DTN");
        })
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI,
        {   
            useNewUrlParser:true,
            useUnifiedTopology:true,  
         })
        
        console.log(`MongoDB connected : ${con.connection.host}`);
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB