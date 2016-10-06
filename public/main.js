'use strict'

const socket = io()

const button = document.getElementById('button')
const number = document.getElementById('number')

button.addEventListener('click', () => {
	const guess = number.value
	console.log('hello click', guess)
	socket.emit('guess', {guess: guess})
})