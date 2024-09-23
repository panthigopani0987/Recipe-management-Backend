const Recipe = require('../models/Recipe');

//add a new recipe
const createRecipe = async (req, res) => {
    const { title, ingredients, instructions, cuisine } = req.body;
    try {
        const recipe = new Recipe({
            title,
            ingredients,
            instructions,
            cuisine,
            author: req.user.id
        });
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating recipe" });
    }
}

//get all recipe
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('author', 'username');

        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving recipes' });
    }
};

//get all recipe by Id
const getRecipeById = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findById(id).populate('author', 'username');
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

        res.json({ recipe });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Error retrieving recipes' });
    }
}

//update a recipe
const updateRecipe = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

        res.json(recipe);
    } catch (err) {
        res.status(400).json({ message: 'Error updating recipes' });
    }
}

//delete a recipe
const deleteRecipe = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) return res.status(404).json({ error: 'Recipe not found' });

        res.json({ message: 'Recipe Deleted' })
    } catch (err) {
        res.status(400).json({ message: 'Error deleting recipes' });
    }
}

module.exports = {
    createRecipe,
    getRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}