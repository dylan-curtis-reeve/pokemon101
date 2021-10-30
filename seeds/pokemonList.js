
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemonList').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemonList').insert([
        {id: 1, name: 'Charmander', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 2, name: 'Bulbasuar', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 3, name: 'Squirtle', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 4, name: 'Voltorb', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 5, name: 'Articuno', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 6, name: 'Magmar', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 7, name: 'Golem', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 8, name: 'Lapras', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 9, name: 'Ditto', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 10, name: 'Mew', image: "", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"}
      ]);
    });
};