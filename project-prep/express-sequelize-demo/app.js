const express = require('express')
const { Sequelize } = require('sequelize')
const UserModel = require('./models/user')
const PostModel = require('./models/post')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Initialize Sequelize
const sequelize = new Sequelize('test_db', 'root', 'Saibaba123456@', {
  host: 'localhost',
  dialect: 'mysql'
})

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

// Define models
const User = UserModel(sequelize)
const Post = PostModel(sequelize)

// Sync models
sequelize.sync()
  .then(() => {
    console.log('Models synchronized successfully.')
  })
  .catch(err => {
    console.error('Error synchronizing models:', err)
  })

// Import routes
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to the Express-Sequelize demo!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})