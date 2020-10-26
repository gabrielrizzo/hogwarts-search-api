const harryPotterAPI = require('./service/http')
const { parseQueryStringToString } = require('./helpers/queryStringParser')

var express = require('express')
var app = express()

app.get('/v1/characters', async function(req, res) {
  try {
    const parsedParams = parseQueryStringToString(req.query)
    const response = await harryPotterAPI.getCharacterByQuery(parsedParams)
    res.status(response.status).json(response.data)
  } catch (e) {
    const status = e.response.status || 500
    return res.status(status).send()
  }
})

app.get('/', function(req, res) {
  res.send('hello world')
})

app.listen(port = '3000', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
