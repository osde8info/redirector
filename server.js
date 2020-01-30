require('dotenv-safe').config()

const PORT = process.env.PORT ? process.env.PORT : 3000

const URL = process.env.URL
  ? process.env.URL
  : 'https://www.charitychoice.co.uk/charities/human-rights/refugees/'

const NUMPAGES = process.env.NUMPAGES ? process.env.NUMPAGES : 14

const express = require('express')

const app = express()

app.get('/', async (req, res) => {
  console.info(new Date())
  var page = Math.floor(Math.random() * NUMPAGES)
  res.redirect(URL + page)
})

app.listen(process.env.PORT, function() {
  console.info('Your app is listening on address ' + this.address().address)
  console.info('Your app is listening on port ' + this.address().port)
})
