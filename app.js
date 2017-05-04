var express = require('express')
var path = require('path')
var app = express()
var cors = require('cors');
const propertyModel = require('./property_model');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// use it before all route definitions
app.use(cors())

app.get('/', function(req, res){
  var dataResult = {
    data: propertyModel.model().splice(req.query.skip, req.query.take),
    total: propertyModel.model().length,
  } 
  res.send(dataResult);
});

app.post('/add', function (req, res) {

})

app.listen(1337, function() {
  console.log("ready")
})
