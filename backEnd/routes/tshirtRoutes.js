const express = require('express')
const { getTshirt, getSingleTshirt } = require('../controlers/tshirtControler')
const router = require('express').Router()



router.route('/tshirts')
    .get(getTshirt)

router.route('/tshirts/:id')
    .get(getSingleTshirt)

module.exports = router