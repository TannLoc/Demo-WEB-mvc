const controller = require('../../controller/homeController')

const router = require('express').Router();

router.get('/', controller.getHomepage);

module.exports = router;