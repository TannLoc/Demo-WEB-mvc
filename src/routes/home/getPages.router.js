const controller = require('../../controller/PagesController')

const router = require('express').Router();

router.get('/', controller.getHomepage);

module.exports = router;