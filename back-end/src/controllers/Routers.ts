import {Router} from "express";
import {recipesRouter} from "./RecipesController";
// import RecipesController from "./RecipesController";


export const router = Router();

router.use('/recipes', recipesRouter);
