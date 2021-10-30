exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {id: 1, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 1},
        {id: 2, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 2},
        {id: 3, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 3},
        {id: 4, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 4},
        {id: 5, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 5},
        {id: 6, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 6},
        {id: 7, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 7},
        {id: 8, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 8},
        {id: 9, hitPointMax: 100, hitPointCurrent: 100, burn: false, frozen: false, poison: false, paralyzed: false, trainerP_id: 9}
      ]);
    });
};