const userController = require("../controllers/UserController")
const router = require('express').Router()
const MailController = require("../controllers/Mail");
router.post("/user",userController.createUser)
router.get("/user",userController.getAllUsers)
router.delete("/user/:id",userController.deleteUser)
router.get("/user/:id",userController.getUserById)
router.put("/user/:id",userController.updateUser)
router.post('/user/login',userController.loginUser)
router.post("/sendmail",MailController.SendMail);




module.exports = router