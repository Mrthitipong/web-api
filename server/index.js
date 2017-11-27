const express = require('express')
const contactsRouter = require('../contacts')
const app = express()


app.use('/', contactsRouter)

module.exports = app

//app.listen(3000, () => console.log('Example app listening on port 3000!'))