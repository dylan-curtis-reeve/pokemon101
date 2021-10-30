exports.up = function(knex) {
    return knex.schema.createTable('tPokemon', (table)=> {
        table.increments('id').primary()
        table.integer('trainer_id')
        table.integer('pokemon_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tPokemon')
};