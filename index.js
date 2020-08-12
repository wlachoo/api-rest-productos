'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,{useMongoClient:true}, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})

//"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZjI3NjE4ZWMzYzE2ZTM2MTA0NmUyY2MiLCJpYXQiOjE1OTY0MTYzOTgsImV4cCI6MTU5NzYyNTk5OH0.yWpFGXseh4keDtlUIwaJDmfnityp5jmDnkCfYaADvX8"
// } 