const express = require('express')
const { getJeans, getSinglejeans } = require('../controlers/jeansControler')
const router = require('express').Router()



router.route('/jeans')
    .get(getJeans)

router.route('/jeans/:id')
    .get(getSinglejeans)

module.exports = router