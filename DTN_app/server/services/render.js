const axios = require('axios');

exports.homeRoutes = (req,res) =>
{
    res.render('index');
}
exports.get_data = (req,res) =>
{
    //Make a get request to /api/AltitudeSensor
    axios.get('http://localhost:3000/api/DTN')
        .then(function(response)
        {
            console.log(response)
            res.render('get_data', { DTN: response.data});
        })
        .catch(err =>{res.send(err);})
    
}