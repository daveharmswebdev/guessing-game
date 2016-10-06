'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Game', {
	guess1: String,
	guess1Player: String,
	guess2: String,
	guess2Player: String
})