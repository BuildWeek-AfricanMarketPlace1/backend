
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {catname: 'Animal Products'},
        {catname: 'Beans'},
        {catname: 'Fruits'},
        {catname: 'Vegetables'},
      ]);
    });
};
