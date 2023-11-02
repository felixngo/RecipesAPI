import {Router, Request, Response } from 'express';
import RecipesBusiness from "../business/RecipesBusiness";
import {HttpError} from "http-errors";
import {Recipe} from "../models/entities/Recipe";
import {RecipeDto} from "../models/dto/RecipeDto";

export const recipesRouter = Router();

const recipesBusiness = new RecipesBusiness();

function getAllRecipes(req: Request, res: Response) {
    recipesBusiness.getAll().then(recipes => res.send(recipes))
        .catch((error : HttpError)  => {
            res.status(error.statusCode).send(error.message);
        });
}

function getRecipeById(req: Request, res: Response) {
    recipesBusiness.getById(parseInt(req.params.id)).then(recipe => res.send(recipe))
        .catch((error : HttpError)  => {
            res.status(error.statusCode).send(error.message);
        });
}

function createRecipe(req: Request, res: Response) {
    const dto : RecipeDto = req.body;
    recipesBusiness.create(dto).then(recipe => res.send(recipe))
        .catch((error : HttpError)  => {
            res.status(error.statusCode).send(error.message);
        });
}

function updateRecipe(req: Request, res: Response) {
    const dto : RecipeDto = req.body;
    dto.id = parseInt(req.params.id);
    recipesBusiness.update(dto).then(recipe => res.send(recipe))
        .catch((error : HttpError)  => {
            res.status(error.statusCode).send(error.message);
        });
}

function deleteRecipe(req: Request, res: Response) {
    recipesBusiness.delete(parseInt(req.params.id)).then(recipe => res.status(200).send())
        .catch((error : HttpError)  => {
            res.status(error.statusCode).send(error.message);
        });
}

recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/:id', getRecipeById);
recipesRouter.post('/', createRecipe);
recipesRouter.put('/:id', updateRecipe);
recipesRouter.delete('/', deleteRecipe);

