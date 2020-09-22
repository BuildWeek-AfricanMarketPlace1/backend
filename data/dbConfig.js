const knex = require("knex");

const knexfile = require("../knexfile.js");
const environment = process.env.NODE_ENV || "development";

// module.exports = knex(knexfile[environment]);
const config = require('../knexfile.js').development;

module.exports = knex(config);