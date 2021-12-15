require('dotenv').config()
const Person = require('./models/people')
const { response } = require('express')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const req = require('express/lib/request')

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
    Person.count({})
        .then(count=>{
            const time = new Date()
            response.send(`<div><p>Phonebook has info for ${count} people</p><p>${time}</p></div>`)
        })
})

app.get('/api/persons/:id', (request, response, next)=>{
    Person.findById(request.params.id)
        .then(person=>{
            if(person){
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch(error=>next(error))
})

app.delete('/api/persons/:id', (request,response, next)=>{
    Person.findByIdAndRemove(request.params.id)
        .then(result=>{
            response.status(204).end()
        })
        .catch(error=>next(error))
})

app.put('/api/persons/:id', (request, response, next)=>{
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }
    
    Person.findByIdAndUpdate(request.params.id, person, {new:true})
        .then(updatedPerson=>{
            response.json(updatedPerson)
        })
        .catch(error=>next(error))
})

app.post('/api/persons',(request,response,next)=>{

    const body = request.body

    const person = new Person({
        name: body.name,
        number: body.number,
        date: new Date(),
    })

    person.save().then(savedPerson=>{
        response.json(savedPerson)
    })
    .catch(error=>next(error))
    
    if(body.name==undefined){
        return response.status(400).json({
            error:'name missing'
        })
    } else if (body.number==undefined){
        return response.status(400).json({
            error:'number missing'
        })
    } else {
        
    }
})

const unknownEndpoint = (request, reponse)=>{
    response.status(404).send({error:'unknown endpoint'})
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next)=>{
    console.error(error.message)

    if(error.name==='CastError'){
        return response.status(400).send({error: 'malformatted id'})
    }
    if(error.name==="MongoServerError"){
        return response.status(400).send({error:'name is not unique'})
    }


    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})