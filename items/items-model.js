const db = require('../data/dbConfig')

module.exports = {
    getItemsByUserId,
    getAllItems,
    getItemById,
    addItemBy,
    updateItem,
    removeItem
}

function getItemsByUserId(id) {
    return db('items')
        .join('users', 'items.user_id', 'users.id')
        .join('locations', 'locations.id', 'items.location_id')
        .join('categories', 'categories.id', 'items.category_id')
        .select('items.id', 'users.id', 'users.email', 'locations.locname', 'categories.catname',
        'items.name', 'items.description', 'items.price')
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

function addItemBy(item) {
   return db('items')
        .insert(item)
        .then(resp => {
           return getItemById(resp) 
        })
        
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

