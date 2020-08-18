const User = require('../models/user')
const service = require('../services')
const bcrypt = require('bcrypt');

let signUp = (req, res) => {
  const user = new User({ 
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password,
  })
 
  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(201).send({ token: service.createToken(user) })
  })
}

let signIn = (req, res) => {

  let body = req.body;


  User.findOne({ email: body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })
    
    if (!bcrypt.compareSync(body.password, user.password)) {
      return res.status(400).json({
          ok: false,
          err: {
              message: 'Usuario o (contraseña) incorrectos'
          }
      });
    }

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createToken(user)
    })
  }) 
}

module.exports = {
  signUp,
  signIn
}
