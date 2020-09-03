module.exports = {
  useMongoClient: true,
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/productsImagenes',
  SECRET_TOKEN: 'miclavedetokens'
}
