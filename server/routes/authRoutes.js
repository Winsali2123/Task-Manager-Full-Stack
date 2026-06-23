const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const { getUserTasks } = require("../controllers/taskController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.post("/register", register);
router.post("/login", login);


router.get("/Tasks", authMiddleware, getUserTasks);

module.exports = router;   //Pas besoin d'accolades car on exporte directement un seule variable