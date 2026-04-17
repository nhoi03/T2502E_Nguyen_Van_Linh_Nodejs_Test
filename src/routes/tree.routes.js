const express = require('express');
const router = express.Router();

const treeController = require('../controllers/tree.controller');


router.get('/', treeController.getHome);
router.get('/about', treeController.getAbout);

router.post('/add', treeController.addTree);
router.post('/reset', treeController.resetTrees);

router.post('/delete/:id', treeController.deleteTree);
router.post('/update/:id', treeController.updateTree);

module.exports = router;