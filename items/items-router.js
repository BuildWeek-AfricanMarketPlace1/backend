const router =require('express').Router()
const Items = require('./items-model')

router.get('/user/:id', (req,res) => {
    const { id } = req.params
    Items.getItemsByUserId(id)
        .then(resp => {
            res.status(200).json({ resp })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
          });
}) 

router.get('/', (req, res) => {
    Items.getAllItems()
        .then(resp => {
            res.status(200).json({ data: resp })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
          })
})

router.get('/:id', (req, res) => {
    Items.getItemById(req.params.id)
        .then(resp => {
            res.status(200).json({ data: resp })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
          })
})

router.post('/user', (req, res) => {
    Items.addItem(req.body)
        .then(resp => {
            res.status(201).json({ data: resp })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
          })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    Items.updateItem(req.body, id)
        .then(resp => {
            res.status(200).json({ data: resp })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
          })
})

router.delete('/:id', (req, res) => {
    Items.removeItem(req.params.id)
        .then(resp => {
            res.status(204).json({ message: 'Deleted'})
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
          })
})

module.exports = router