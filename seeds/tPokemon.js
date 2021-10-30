exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tPokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('tPokemon').insert([
        {id: 1, trainer_id: 1, pokemon_id: 4},
        {id: 2, trainer_id: 2, pokemon_id: 5},
        {id: 3, trainer_id: 3, pokemon_id: 6}
      ]);
    });
};