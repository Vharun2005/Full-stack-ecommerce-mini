const express = require('express')
const { getElectronics, getSingleElectronics } = require('../controlers/electronicsControler')
const router = require('express').Router()


router.route('/electronics')
   .get(getElectronics)

router.route('/electronics/:id')
   .get(getSingleElectronics)   

module.exports = router