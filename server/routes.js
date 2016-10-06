'use strict'

const { Router } = require('express')
const router = Router()
const Game = require('../models/game')

router.get('/', (req, res) => res.render('home'))

router.get('/game', (req, res) => {
	Game
		.find()
		.then( games => res.render('index', {games}))
		.catch(console.error)
})

router.get('/game/create', (req,res) => {
	Game
		.create({
			guess1: '',
			guess1Player: '',
			guess2: '',
			guess2Player: ''
		})
		.then( game => res.redirect(`/game/${game._id}`))
		.catch(console.error)
})

router.get('/game/:id', (req,res) => {
	res.render('game')
})

module.exports = router