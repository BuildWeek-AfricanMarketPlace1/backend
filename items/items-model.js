const db = require('../data/dbConfig')

module.exports = {
    getItemsByUserId,
    getAllItems,
    getItemById,
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
        .join('locations', 'locations.id', 'items.location_id')
        .join('categories', 'categories.id', 'items.category_id')
        .select('items.id', 'items.user_id', 'locations.locname', 'categories.catname',
        'items.name', 'items.description', 'items.price')
}
function getItemById(id) {
    return db('items')
        .join('locations', 'locations.id', 'items.location_id')
        .join('categories', 'categories.id', 'items.category_id')
        .select('items.id', 'items.user_id', 'locations.locname', 'categories.catname',
        'items.name', 'items.description', 'items.price')
        .where({ 'items.id': id })
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

