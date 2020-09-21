const router =require('express').Router()
const Items = require('./items-model')

router.get('/user/:id', (req,res) => {
    Items.getItemsByUserId(req.params.id)
    console.log(resp)
        .then(resp => {
            res.status(200).json({ resp })
        })
        .catch(err => console.log({ error: err.message}))
})

module.exports = router