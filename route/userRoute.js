const route = require('express').Router();
const userController = require('../controller/userController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

route.get(`/allUser`,auth,authAdmin,userController.getAllUser)
route.get(`/single/:id`,auth, authAdmin,userController.getSingleUser)
route.get(`/show`,auth,userController.getCurrentUser)


module.exports = route