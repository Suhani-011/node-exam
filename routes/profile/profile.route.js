const express = require("express");
const router = express.Router();
const {getUserController, updateUserController, deleteUserController} = require('../../controllers/profile/profile.controller');
const { authenticate } = require("../../middlewares/auth.middleware");

router.get("/",authenticate,getUserController)
router.put("/",authenticate,updateUserController)
router.delete("/",authenticate,deleteUserController)

module.exports = router