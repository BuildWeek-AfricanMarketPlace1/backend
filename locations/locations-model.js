const db =require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('locations')
}

function findById(id) {
    return db('locations')
        .where ({ id })
}

function add(location) {
    return db('locations')
        .insert(location)
        .then(ids => {
            return findById(ids[0])
        })
}

function update(changes, id) {
    return db('locations')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id)
        })
}

function remove(id) {
    return db('locations')
        .where({ id })
        .del()
}