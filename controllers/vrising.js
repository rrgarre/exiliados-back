const vrisingRouter = require('express').Router()
const vrisingBoses = require('../utils/vrising-bosses').vrisingBosses
const VrisingBosses = require('../models/vrising-bosses')

vrisingRouter.get('/bosses', async (request, response) => {

  // await inicializarTablaBoses()

  try {
    const listaBosses = await VrisingBosses.findAll()
    return response.send(listaBosses)
  } catch (error) {
    return {'error': 'No se pueden consultar los bosses'}
  }
  // return response.send(vrisingBoses)
})

vrisingRouter.post('/bosses/:id', async (request, response) => {
  console.log('id: ', request.params.id)
  console.log('body: ', request.body)
  // console.log('value: ', request.body.value)

  const id = request.params.id
  const {name, value} = request.body

  

  return response.send('todo OK')
})

const inicializarTablaBoses = async () => {
  try {
    await VrisingBosses.sync({ force: true })
    let count = 0
    vrisingBoses.map(boss => {
      count++
      VrisingBosses.create({
        name: boss.jefe,
        level: boss.level,
        url: boss.url,
        order: count,
        rafa: boss.rafa,
        sergio: boss.sergio,
        juanjo: boss.juanjo,
        lesther: boss.lesther
      })
    })
    
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

module.exports = vrisingRouter