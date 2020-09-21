const db = require('../data/dbConfig')

module.exports = {
    getItemsByUserId
}

function getItemsByUserId(id) {
    return db('items')
        .join('users', 'items.user_id', 'user.id')
        .select('user.email','item.name')
        .where({ "items.user_id":id })
}

