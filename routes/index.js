var express = require('express');
var router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

//rellenar con lo que tengo en mongo
router.get('/', function(req, res, next) {
  Persona.find((err,personas)=>{

    if(err) throw err;
   
    res.render('index', { personas: personas });
  });
});

//insertar
router.get('/persona/nuevo', function(req, res, next){
 
  res.render('personaForm',{});
});

//modificar
router.get('/persona/modificar/:id', (req,res,next)=>{
  let idreq = req.params.id;

  Persona.findOne({_id: idreq}, (err,persona)=>{
    if(err) throw err;
    res.render('personaForm', {persona:persona});
  });
});

//eliminar
router.get('/persona/eliminar/:id', (req,res,next)=>{
  let idreq = req.params.id;

  Persona.remove({_id: idreq}, (err)=>{
    if(err) throw err;
    res.redirect('/');
  });
});



module.exports = router;
