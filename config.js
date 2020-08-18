module.exports = {
  useMongoClient: true,
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb+srv://wlachoo:GxJb9IJ9fc9uoc3j@cluster0.ylgzx.mongodb.net/shop',
  SECRET_TOKEN: 'miclavedetokens'
}
