const db = require('../data/dbConfig')

module.exports = {
    getItemsByUserId,
    getAllItems,
    addItem,
    updateItem,
    removeItem
}

function getItemsByUserId(id) {
    return db('items')
        .join('users', 'items.user_id', 'users.id')
        .select('users.id', 'users.email', 'items.name')
        .where({ "items.user_id": id })
}

function getAllItems() {
    return db('items')
}

function addItem(item) {
   return db('items')
        .insert(item)
        
}

function updateItem(item, id) {
    return db('items')
        .update(item)
        .where({ id })
}

function removeItem(id) {
    return db('items')
        .where({ id })
        .del()
}

