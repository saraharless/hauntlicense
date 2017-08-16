const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.render('form')
});
app.post('/', function(req, res){
  let name = req.body.name;
  console.log(':' + name + ':');
  // let html = '<p>Your user name is: </p>' + email;

  res.render('form')
});
app.listen(3000, function(){
  console.log('ghost toast');
})
