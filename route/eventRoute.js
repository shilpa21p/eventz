const route = require('express').Router()
const eventController = require('../controller/eventController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


//create new event ->admin access 
route.post(`/create`,  auth, authAdmin, eventController.create)

//to call all events- open to all
route.get(`/getEvents`, auth, eventController.getAll)

//to call single event- open to all
route.get(`/getEvents/:id`, auth, eventController.getEvent)

// to update event - admin access
route.patch(`/update/:id`, auth, authAdmin,  eventController.update)

// to delete event- admin access
route.delete(`/delete/:id`,auth, authAdmin,  eventController.delete)

module.exports = route