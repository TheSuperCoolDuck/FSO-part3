require('dotenv').config()
const Person = require('./models/people')
const { response } = require('express')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

morgan.token('body', (request, response) => JSON.stringify(request.body));

const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/persons', (request, response)=>{
    Person.find({}).then(persons=>{
        response.json(persons)
    })
})

app.get('/info', (request, response)=>{
    const numPersons = persons.length
    const time = new Date()

    response.send(`<div><p>Phonebook has info for ${numPersons} people</p><p>${time}</p></div>`)
})

app.get('/api/persons/:id', (request, response)=>{
    Person.findById(request.params.id)
        .then(person=>{
            response.json(person)
        })
})

app.delete('/api/persons/:id', (request,response)=>{
    Person.findByIdAndRemove(request.params.id)
        .then(result=>{
            response.status(204).end()
        })
})

app.post('/api/persons',(request,response)=>{

    const body = request.body
    
    if(body.name==undefined){
        return response.status(400).json({
            error:'name missing'
        })
    } else if (body.number==undefined){
        return response.status(400).json({
            error:'number missing'
        })
    } else {
        const person = new Person({
            name: body.name,
            number: body.number,
            date: new Date(),
        })

        person.save().then(savedPerson=>{
            response.json(savedPerson)
        })
    }
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})