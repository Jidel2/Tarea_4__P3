const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

router.get('/', regionController.getRegions);
router.get('/create', regionController.getCreateRegion);
router.post('/create', regionController.postCreateRegion);
router.get('/edit/:id', regionController.getEditRegion);
router.post('/edit/:id', regionController.postEditRegion);
router.get('/delete/:id', regionController.getDeleteRegion);
router.post('/delete/:id', regionController.postDeleteRegion);

module.exports = router;