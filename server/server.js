'use strict'

const express = require('express')
const { Server } = require('http')
const mongoose = require('mongoose')
const socketio = require('socket.io')

const routes = require('./routes')

//create app from express
const app = express()
// create node server and wrap it around express
const server = Server(app)
// create io and wrap it around node server
const io = socketio(server)

// port and MONGODB_URL constants
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/guessinggame'

// set ability to render and use pug and set public folder
app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(routes)

mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () => {
	server.listen(PORT, () => console.log('now listening on port', PORT))
})
