const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.post('/sessions', (req, res) => {
  req(SessionController.create)
})
routes.get('/ongs', (req, res) => {
  req(OngController.index)
})
routes.post('/ongs', (req, res) => {
  OngController.create
})
routes.get('/incidents', (req, res) => {
  IncidentController.index
})
routes.post('/incidents', (req, res) => {
  IncidentController.create
})
routes.delete('/incidents/:id', (req, res) => {
  IncidentController.delete
})
routes.get('/profile', (req, res) => {
  ProfileController.index
})

module.exports = routes