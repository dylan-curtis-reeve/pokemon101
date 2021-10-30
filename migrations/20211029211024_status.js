exports.up = function(knex) {
    return knex.schema.createTable('status', (table)=> {
        table.increments('id').primary()
        table.integer('trainerP_id')
        table.integer('hitPointMax')
        table.integer('hitPointCurrent')
        table.boolean('burn')
        table.boolean('frozen')
        table.boolean('poison')
        table.boolean('paralyzed')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('status')
};