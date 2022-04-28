const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()


// app.use('/', (req, res) => {
//     res.status(200).json({ message: 'testing api routes'})
// })

app.use('/api/test', require('./routes/testRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`) )

