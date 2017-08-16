const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.render('form')
});
app.post('/', function(req, res){
  let name = req.body.name;
  let html = '<p>Your registered death name is: </p>' + name;
  // let html = '<p>Your user name is: </p>' + email;

  res.send(html);
});
app.listen(3000, function(){
  console.log('ghost toast');
})
