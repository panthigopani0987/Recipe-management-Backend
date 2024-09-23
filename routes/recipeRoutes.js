const express = require('express');
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');
const routes = express.Router();

routes.post('/',authMiddleware,recipeController.createRecipe);
routes.get('/',recipeController.getRecipes);
routes.get('/:id',recipeController.getRecipeById);
routes.put('/:id',authMiddleware,recipeController.updateRecipe);
routes.delete('/:id',authMiddleware,recipeController.deleteRecipe);

module.exports = routes;