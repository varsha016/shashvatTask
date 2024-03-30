const { UserData, getAllUsers, deleteFeedback } = require("../controller/userController")

const router = require("express").Router()
router
    .post("/userdata",UserData )
    .get("/userget",getAllUsers )
    .delete("/delete",deleteFeedback )
   



module.exports = router