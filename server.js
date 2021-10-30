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
    console.log(id, pId)
    db.addPokemon(pId, id)
        .then(() => {
            res.redirect('/')
        })
})



server.get('/:id', (req, res) => {
    const {id} = req.params 
    console.log(req.query.name)
    // need to add a check to see if they have pokemon to then go through the logic currently in the first if statement
    db.getTrainersPokemon(id)
        .then((info) => {
            console.log(info)
            if(info.length >= 1){
                res.render('trainerPokemon', {info})
            }

    else if (req.query.name){
    db.getTrainersPokemon(id)
        .then((info) => {
            if (info.length != 0){
            console.log(info)
            res.render('trainerPokemon', {info})
            } else if (info.length == 0){
                res.redirect(`/${id}/newPokemon`)
            }
        })
    } else if (!req.query.name){
            console.log('its me')
            db.getTrainer(id)
                .then((infor) => {
                    console.log(infor)
                    infor.tName = infor.name
                    infor.tId = infor.id
                    res.render('trainerPokemon', {info: [infor]})
                })
            
        }
        
    })
})


server.get('/', (req, res) => {
    db.getTrainers()
        .then ((trainers) => {
            res.render('index', {trainers})
        })
    
})

server.post('/', (req, res) => {
    const {name} = req.body
    db.addTrainer(name)
        .then(
            (idOfTrainer) => {
                console.log(idOfTrainer)
                return db.getTrainer(idOfTrainer)
            })
        .then((newTId) => {
            console.log(`newTId ${newTId}`)
            res.redirect(`/${newTId.id}/?name=${name}`)
        })
    
})



module.exports = { 
    server 
}