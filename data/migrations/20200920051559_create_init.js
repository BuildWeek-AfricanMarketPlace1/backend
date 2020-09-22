
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string("email", 128).notNullable().unique().index();
    tbl.string("password", 256).notNullable();
  })
  .createTable('locations', tbl => {
      tbl.increments()
      tbl.string('locname').notNullable().unique().index()
  })
  .createTable('categories', tbl => {
      tbl.increments()
      tbl.string('catname').notNullable().unique()
  })
  .createTable('items', tbl => {
      tbl.increments()
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('location_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('locations')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    tbl.string('name').notNullable().index()
    tbl.string('description')
    tbl.float('price').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('items')
    .dropTableIfExists('categories')
    .dropTableIfExists('locations')
    .dropTableIfExists('users')
};
