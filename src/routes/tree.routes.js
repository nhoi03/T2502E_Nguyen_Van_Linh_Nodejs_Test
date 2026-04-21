const express = require('express');
const router = express.Router();

const treeController = require('../controllers/tree.controller');


router.get('/', treeController.getHome);
router.get('/about', treeController.getAbout);

router.post('/add', treeController.addTree);
router.get('/trees', treeController.getAllTrees);

router.post('/reset', treeController.resetTrees);

router.post('/delete/:id', treeController.deleteTree);
router.post('/edit/:id', treeController.updateTree);

module.exports = router;