'use strict'

const socket = io()

const button = document.getElementById('button')
const number = document.getElementById('number')

button.addEventListener('click', () => {
	console.log('hello click', number.value)
})