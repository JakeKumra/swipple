require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const Beverage = require('./models/beverage')

// GET request event handling
app.get('/', (request, response) => {
  response.send('<h1>Hello Darkness My Old Friends!</h1>')
  response.send(response)
})

// HTTP route to get all beverages
app.get('/api/beverages', (request, response) => {
  Beverage.find({}).then(beverages => {
    response.json(beverages)
  })
})



// error handling for locating beverage by id
app.get('/api/beverages/:id', (request, response, next) => {
  Beverage.findById(request.params.id)
    .then(beverage => {
      if (beverage) {
        response.json(beverage)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// app.delete('/api/beverages/:id', (request, response, next) => {
//   Beverage.findByIdAndRemove(request.params.id)
//     .then(result => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// HTTP route to get beverage by id (see mongoose docs for alternative method)
app.delete('/api/beverages/:id', (request, response) => {

  const id = Number(request.params.id)

  Beverage.remove(
    {"name": `${id}`}
    ).then(result => {
      response.status(204).end()
    })
})

// HTTP route to create new beverage
app.post('/api/beverages/', (request, response) => {
  const body = request.body

  // if (body.name === undefined) {
  //   return response.status(400).json({ error: 'content missing' })
  // }

  // functionality to add +1 to id? 
  const beverage = new Beverage({
    id: body.id || "",
    type: body.type || "",
    category: body.category || "",
    region: body.region || "",
    color: body.color || "",
    description: body.description || "",
    name: body.name || "",
    imageUrl: body.imageUrl || "",
    size: body.size || "",
    value: body.value || "",
    abv: body.abv || "",
    year: body.year || "",
    date: new Date()
  })
  beverage.save().then(savedBeverage => {
    response.json(savedBeverage)
  })
})







// // get an ID for the POST request
// const generateId = () => {
//   const maxId = notes.length > 0
//     ? Math.max(...notes.map(n => n.id))
//     : 0
//   return maxId + 1
// }

// // POST request event handling
// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (!body.content) {
//     return response.status(400).json({ 
//       error: 'content missing' 
//     })
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//     id: generateId(),
//   }

//   notes = notes.concat(note)

//   // this would normally just be an update to the database?
//   response.json(note)
//   console.log(note)
// })

// // DELETE request event handling
// app.delete('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     notes = notes.filter(note => note.id !== id)
    
//     response.status(204).end()
//     console.log(notes)
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
