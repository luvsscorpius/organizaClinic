const express = require('express')
const app = express()
const port = 2000

const indexRoute = require('./Routes/indexRoute.route')


app.use('/', indexRoute)

app.listen(port, () => {
    console.log(`Server running on port`, port)
})