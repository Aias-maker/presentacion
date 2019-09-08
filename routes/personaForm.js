var express = require('express');
var router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

/* GET users listing. */
router.post('/persona/operar', function(req, res, next) {
  console.log("entra");
  //si viene vacio
  if (req.body._id === "") {
    let per = new Persona({
      nombres: req.body.nombres,
      apellidos:  req.body.apellidos,
      edad: req.body.edad
    });

    per.save();
  } else {
    Persona.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }

  res.redirect('/');
  
});

module.exports = router;
