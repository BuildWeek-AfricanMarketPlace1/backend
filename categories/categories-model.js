const db =require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('categories')
}

function findById(id) {
    return db('categories')
        .where ({ id })
}

function add(category) {
    return db('categories')
        .insert(category)
        .then(ids => {
            return findById(ids[0])
        })
}

function update(changes, id) {
    return db('categories')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id)
        })
}

function remove(id) {
    return db('categories')
        .where({ id })
        .del()
}