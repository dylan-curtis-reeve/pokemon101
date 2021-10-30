const express = require('express')
const server = express()
const hbs = require('express-handlebars')
const db = require('./db')

// middleware & Engine

server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))
server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')

// Routes

server.get('/:id/newPokemon', (req, res) => {
    const {id} = req.params 
    db.getPokemon()
        .then((pokemon) => {
            for (let i= 0; i < pokemon.length; i++){
                if (!pokemon[i].tId){
                pokemon[i].tId = id
                }
            }
            console.log(pokemon)
            res.render('choosePok', {pokemon})
        })
})
server.post('/:id/newPokemon', (req, res) => {
    const {id} = req.params
    const {id: pId} = req.body
    db.addPokemon(pId, id)
        .then(() => {
            res.redirect('/')
        })
})



server.get('/:id', (req, res) => {
    const {id} = req.params 
    db.getTrainersPokemon(id)
        .then((info) => {
            res.render('trainerPokemon', {info})
        })
})

server.get('/', (req, res) => {
    db.getTrainers()
        .then ((trainers) => {
            res.render('index', {trainers})
        })
    
})

server.post('/', (req, res) => {
    const {id} = req.body
    res.redirect('trainerPokemon', {id})
})



module.exports = { 
    server 
}