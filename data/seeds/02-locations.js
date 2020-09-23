
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {locname: 'Nigeria'},
        {locname: 'Kenya'},
        {locname: 'Ethiopia'},
        {locname: 'Tanzania'},
        {locname: 'Egypt'},
        {locname: 'Uganda'},
        {locname: 'Morocco'},
      ]);
    });
};
