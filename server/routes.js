'use strict'

const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.render('home'))

router.get('/game', (req, res) => {
	res.render('index', {games: [1,2,3]})
})

router.get('/game/:id', (req,res) => {
	res.render('game')
})

module.exports = router