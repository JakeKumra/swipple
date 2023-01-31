// const { Decimal128 } = require('mongodb')
// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://jakekumra:${password}@cluster0.ayh3yk7.mongodb.net/swippledb?retryWrites=true&w=majority`

// const noteSchema = new mongoose.Schema({
//   id: String,
//   type: String,
//   color: String,
//   description: String,
//   name: String,
//   imageUrl: String,
//   size: String,
//   value: Decimal128,
//   abv: String,
//   date: Date
// })

// const Beverage = mongoose.model('Beverage', noteSchema)
// // new Date()
// mongoose
//   .connect(url)
//   .then((result) => {
//     console.log('connected')

// const beverage = new Beverage({
//   id: "8",
//   type: "wine",
//   color: "red",
//   name: "Jacobs Creek Shiraz Cabernet",
//   region: 'South Eastern Australia',
//   description: "Baileys Irish Cream is an Irish cream liqueur, an alcoholic drink flavoured with cream, cocoa and Irish whiskey.",
//   imageUrl: "https://source.unsplash.com/kfXWU21Nunw/w=300",
//   size: "75cl",
//   value: 9.99,
//   abv: "17%",
//   date: new Date()
// })

//   Note.find({}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
//   })

//   //   return beverage.save()
//   // })
//   // .then(() => {
//   //   console.log('Beverage saved!')
//   //   console.log(beverage)
//   //   return mongoose.connection.close()
//   })
//   .catch((err) => console.log(err))