const express = require("express");

const router = express.Router();

const { test } = require("../controllers/spotify.controller");

router.route("/api").get(test);

module.exports = router;
