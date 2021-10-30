exports.up = function(knex) {
    return knex.schema.createTable('pokemonList', (table)=> {
        table.increments('id').primary()
        table.string('name')
        table.string('image')
        table.string('attack1')
        table.string('attack2')
        table.string('attack3')
        table.string('attack4')
        table.string('funFact')
        table.string('type')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pokemonList')
};