
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          user_id: 1,
          location_id: 1,
          category_id: 1,
          name: 'Beef',
          description: 'cow',
          price: 10.50
        },
        {
          user_id: 1,
          location_id: 2,
          category_id: 2,
          name: 'Kidney Beans',
          description: 'red',
          price: .65
        },
        {
          user_id: 1,
          location_id: 3,
          category_id: 3,
          name: 'Barley',
          description: 'delicious',
          price: 1.75
        },
      ]);
    });
};
