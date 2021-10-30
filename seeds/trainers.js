exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trainers').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainers').insert([
        {id: 1, name: 'Ash'},
        {id: 2, name: 'Misty'},
        {id: 3, name: 'Brock'}
      ]);
    });
};