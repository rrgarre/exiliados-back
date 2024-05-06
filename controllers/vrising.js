const vrisingRouter = require('express').Router()
const vrisingBoses = require('../utils/vrising-bosses').vrisingBosses

vrisingRouter.get('/bosses', async (request, response) => {

  return response.send(vrisingBoses)
})

module.exports = vrisingRouter