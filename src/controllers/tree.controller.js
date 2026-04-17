const treeService = require('../services/tree.service');

// 4. Show all trees
const getHome = async (req, res) => {
    try {
        const trees = await treeService.getAllTrees();

        res.render('index', {
            trees,
            error: null,
            currentPage: 'home'
        });
    } catch (error) {
        console.error(error);
        res.send('Error loading trees');
    }
};

// About page
const getAbout = (req, res) => {
    res.render('about', {
        currentPage: 'about'
    });
};


const addTree = async (req, res) => {
    try {
        const { treename, description, image } = req.body;

        
        if (!treename || !description) {
            const trees = await treeService.getAllTrees();

            return res.render('index', {
                trees,
                error: 'Tree Name and Description are required!',
                currentPage: 'home'
            });
        }

        // 👉 Add to MongoDB
        await treeService.createTree(treename, description, image);

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.send('Error adding tree');
    }
};


const resetTrees = async (req, res) => {
    try {
        await treeService.deleteAllTrees();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.send('Error resetting data');
    }
};
// DELETE
const deleteTree = async (req, res) => {
    await treeService.deleteTreeById(req.params.id);
    res.redirect('/');
};

// UPDATE
const updateTree = async (req, res) => {
    const { treename, description, image } = req.body;

    await treeService.updateTree(req.params.id, {
        treename,
        description,
        image
    });

    res.redirect('/');
};

module.exports = {
    getHome,
    getAbout,
    addTree,
    resetTrees,
    deleteTree,
    updateTree
};