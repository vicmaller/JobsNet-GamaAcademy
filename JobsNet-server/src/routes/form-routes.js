const express = require('express');
const router = express.Router();
const formsController = require('../controllers/form-controller');

router.get('/', formsController.listForms);
router.post('/', formsController.createForm);

module.exports = router;