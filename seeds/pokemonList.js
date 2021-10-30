
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemonList').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemonList').insert([
        {id: 1, name: 'Charmander', image: "/Charmander.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 2, name: 'Bulbasaur', image: "/Bulbasaur.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 3, name: 'Squirtle', image: "/Squirtle.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 4, name: 'Voltorb', image: "/Voltorb.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 5, name: 'Articuno', image: "/Articuno.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 6, name: 'Magmar', image: "/Magmar.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 7, name: 'Golem', image: "/Golem.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 8, name: 'Lapras', image: "/Lapras.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 9, name: 'Ditto', image: "/Ditto.png", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"},
        {id: 10, name: 'Mew', image: "/Mew.webp", attack1: "Headbutt", attack2: "Tailwhip", attack3: "Scratch", attack4: "Thundershock", funFact: "This is a pokemon", type: "Normal"}
      ]);
    });
};