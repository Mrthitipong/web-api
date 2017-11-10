const express = require('express')
const app = express()

app.get('/books', (req, res) => {
    res.json([
        {title : 'Hello JavaScript', isbn : '978123456654'},
        {title : 'Advance CSS3', isbn: '978999214587'}
    ])
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))