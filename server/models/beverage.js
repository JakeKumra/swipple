const { Int32 } = require('mongodb')
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const BeverageSchema = new mongoose.Schema({
    id: Number,
    type: String,
    category: String,
    region: String,
    color: String,
    description: String,
    name: String,
    imageUrl: String,
    size: String,
    value: String,
    abv: String,
    year: String,
    date: Date
})
  
BeverageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject._id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Beverage', BeverageSchema)