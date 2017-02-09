var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');

var app = express();


app.use(bodyParser.json());

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family/', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants/', mainCtrl.getRestaurant);
app.get('/restaurants/:name', mainCtrl.getRestaurantName)
app.put('/name/:name', mainCtrl.putName);
app.put('/location/', mainCtrl.putLocation);
app.post('/hobbies/', mainCtrl.postHobbies);
app.post('/occupations/', mainCtrl.postOccupations);
app.post('/family/', mainCtrl.postFamily)
app.post('/restaurants/', mainCtrl.postRestaurants)
app.get('/skillz/', mainCtrl.getSkillz)
app.post('/skillz/', middleware.generateId, mainCtrl.postSkillz)
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets)







var port = 3000;
app.listen(port, function(){
  console.log('Listening on port: ', port);
})
