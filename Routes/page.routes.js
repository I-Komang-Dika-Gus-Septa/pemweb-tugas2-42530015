const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menu.controller');

router.get('/', menuController.getKatalogMenu);

router.get('/menu/:id', menuController.getDetailMenu);

module.exports = router;