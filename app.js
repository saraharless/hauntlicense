const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.render('form')
});
app.post('/', function(req, res){
  let name = req.body.name;
  req.checkBody('name', 'please provide a name concurrent with ghost guidelines that is between 1 and 10 characters long.').notEmpty();
  console.log('your username is: ' + name);
  let errors = req.validationErrors();
   if (errors) {
     console.log(errors);
     res.render('form', {errs:errors});
   }
  // let email = req.body.email;
  // <p>'your email is: ' + email</p>
  // let death = req.body.death;
  // console.log('your cause of death was: ' + death);
  // let haunting = req.body.select;
  // console.log('your requested license is for: ' + haunting);
  // let pass = req.body.pass;
  // console.log('your entrance code is: ' + pass);
  res.render('form')
});
app.listen(3000, function(){
  console.log('ghost toast');
})
