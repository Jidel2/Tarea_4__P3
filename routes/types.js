const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');

router.get('/', typeController.getTypes);
router.get('/create', typeController.getCreateType);
router.post('/create', typeController.postCreateType);
router.get('/edit/:id', typeController.getEditType);
router.post('/edit/:id', typeController.postEditType);
router.get('/delete/:id', typeController.getDeleteType);
router.post('/delete/:id', typeController.postDeleteType);

module.exports = router;