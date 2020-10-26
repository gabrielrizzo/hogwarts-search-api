const axios = require('axios')
const { loadEnvConfig } = require('../config')

loadEnvConfig()

function RequesterService (URL, KEY) {
  const url = URL
  const key = KEY ? `&key=${KEY}` : ''

  async function getCharacterByQuery (query) {
    const characters = await axios.get(`${url}characters/?${query}${key}`)
    return characters
  }

  return {
    getCharacterByQuery
  }
}

const HarryPotterAPI = RequesterService('https://www.potterapi.com/v1/', process.env.HARRY_POTTER_KEY)

module.exports = HarryPotterAPI
console.log('YOUR KEY ===>', process.env.HARRY_POTTER_KEY, '<===')
