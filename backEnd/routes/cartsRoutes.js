const express = require('express')
const { getCarts, postCarts, updateCarts, deleteCarts } = require('../controlers/cartControler')
const router = require('express').Router()


router.route('/carts')
    .post(getCarts)
    .patch(updateCarts)
    .delete(deleteCarts)
router.route('/postcart').post(postCarts)


module.exports = router    