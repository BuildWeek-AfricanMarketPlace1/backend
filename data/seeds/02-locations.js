
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {name: 'Nigeria'},
        {name: 'Kenya'},
        {name: 'Ethiopia'},
        {name: 'Tanzania'},
        {name: 'Egypt'},
        {name: 'Uganda'},
        {name: 'Morocco'},
      ]);
    });
};
