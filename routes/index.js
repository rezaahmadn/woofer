"use strict"

const express = require('express')
const Controller = require('../controllers')
const router = express.Router()

router.get('/', Controller.home)
router.post('/', Controller.post)
router.get('/:id/wow', Controller.wow)
router.get('/:id/unwow', Controller.unwow)

module.exports = router