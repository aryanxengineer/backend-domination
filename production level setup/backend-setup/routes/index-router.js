const express = require("express");
const router = express.Router();

const { homeController } = require("../controllers/index-controller");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", isLoggedIn, homeController);

module.exports = router;
