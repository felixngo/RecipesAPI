import {Router} from "express";
import {recipesRouter} from "./RecipesController";


export const router = Router();

//register router
router.use('/recipes', recipesRouter);
