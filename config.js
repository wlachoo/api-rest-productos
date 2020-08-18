module.exports = {
  useMongoClient: true,
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://wlachoo:k9WZmQWSOtBnHVOz@cluster0.ylgzx.mongodb.net/shop',
  SECRET_TOKEN: 'miclavedetokens'
}
