const express = require('express')
const { getCarts, postCarts, updateCarts, deleteCarts } = require('../controlers/cartControler')
const router = require('express').Router()


router.route('/carts')
    .get(getCarts)
    .post(postCarts)
    .patch(updateCarts)
    .delete(deleteCarts)


module.exports = router    