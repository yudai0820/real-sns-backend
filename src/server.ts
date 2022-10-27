const express = require('express')
const app = express()
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config()

// データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log('Connencting to DB')
  })
  .catch((err: any) => {
    console.log(err)
  })

// ミドルウェア
app.use(express.json())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

app.get('/', (_: any, res: any) => {
  res.send('hello express')
})

app.listen(PORT, () => console.log('Server is running'))
