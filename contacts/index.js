const express = require('express')
const router = express.Router()

let contactDb = [
    {name : 'Thitipong', id : '58160458'},
    {name : 'Worawut', id : '58160090'},
    {name : 'Jedsadagon', id : '58160283'},
    {name : 'Phakawadee', id : '58160473'}  
]

router.get('/contacts/:id', (req, res) => {
    let id = req.params.id
    res.json(contactDb[id])
})

router.get('/contacts', (req, res) => {
    res.json(contactDb)
})

module.exports = router