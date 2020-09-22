const router = require('express').Router()
const Locations = require('./locations-model')

router.get('/', (req, res) => {
    Locations.find()
    .then(resp => {
        console.log(resp)
        res.status(200).json({ data: resp})
    })
    .catch(err => {
        res.status(500).json({ error: err.msg})
    })
})

router.get('/:id', (req, res) => {
    Locations.findById(req.params.id)
        .then(resp => {
            res.status(200).json({ data: resp })
        })
        .catch(err => {
            res.status(500).json({ error: err.msg})
        })
})

router.post('/', (req, res) => {
    Locations.add(req.body)
    .then(resp => {
        res.status(201).json({ data: resp })
    })
    .catch(err => {
        res.status(500).json({ error: err.msg})
    })
})
router.put('/:id', (req, res) => {
    Locations.update(req.body, req.params.id)
        .then(resp => {
            res.status(201).json({ data: resp})
        })
        .catch(err => {
            res.status(500).json({ error: err.msg})
        })
})
router.delete('/:id', (req, res) => {
    Locations.remove(req.params.id)
        .then(resp => {
            res.status(204).end()
        })
        .catch(err => {
            res.status(500).json({ error: err.msg})
        })
})
module.exports = router