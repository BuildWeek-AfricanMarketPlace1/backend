
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {name: 'Animal Products'},
        {name: 'Beans'},
        {name: 'Cereals'},
        {name: 'Fruits'},
        {name: 'Vegetables'},
      ]);
    });
};
