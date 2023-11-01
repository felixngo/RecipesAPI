import {Router, Request, Response } from 'express';

export const recipesRouter = Router();

function getAllRecipes(req: Request, res: Response) {
    res.send('Get recipes');
}

function getRecipeById(req: Request, res: Response) {
    res.send(`Get recipe by ${req.params.id}`);
}

function createRecipe(req: Request, res: Response) {
    res.send('Create recipe');
}

function updateRecipe(req: Request, res: Response) {
    res.send('Update recipe');
}

function deleteRecipe(req: Request, res: Response) {
    res.send('Delete recipe');
}

recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/:id', getRecipeById);
recipesRouter.post('/', createRecipe);
recipesRouter.put('/:id', updateRecipe);
recipesRouter.delete('/', deleteRecipe);

