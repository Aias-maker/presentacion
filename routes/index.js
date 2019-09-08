var express = require('express');
var router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

/* GET home page. */
router.get('/', function(req, res, next) {
  Persona.find((err,personas)=>{

    if(err) throw err;
   
    res.render('index', { personas: personas });
  });
});

router.get('/persona/nuevo', function(req, res, next){
 
  res.render('personaForm',{});
});




module.exports = router;
