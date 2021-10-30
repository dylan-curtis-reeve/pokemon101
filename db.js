const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const conn = require('knex')(config)

let getTrainers = (db = conn) => {
    return db('trainers')
}

let getTrainersPokemon = (id, db = conn) => {
    return db('tPokemon')
        .where('trainer_id', id)
        .join('trainers', 'tPokemon.trainer_id', 'trainers.id')
        .join('pokemonList', 'tPokemon.pokemon_id', 'pokemonList.id')
        .select('trainers.name as tName', 'pokemonList.image', 'pokemonList.name as pName',
        'trainers.id as tId', "pokemonList.image", "tPokemon.id as pId" )
}

let getPokemon = (db=conn) => {
    return db('pokemonList')
}

let addPokemon = (pId, tId, db=conn) => {
    return db('tPokemon')
        .insert({"trainer_id": tId, "pokemon_id": pId})
        
}

let addTrainer = (name, db = conn) => {
    return db('trainers')
        .insert({name})
}

let getTrainer = (tId, db = conn) => {
    return db('trainers')
        .select("*")
        .where('id', tId)
        .first()
}

let updateTPokemon = (nPI, tPI, db = conn) => {
    return db('tPokemon')
        .update({'pokemon_id': nPI})
        .where('id', tPI)
}

let releasePokemon = (tPId, db = conn) => {
    console.log(tPId)
    return db('tPokemon')
    .del()
    .where('id', tPId)
}



module.exports = {
    getTrainers,
    getTrainersPokemon,
    getPokemon,
    addPokemon,
    addTrainer,
    getTrainer,
    updateTPokemon,
    releasePokemon
}