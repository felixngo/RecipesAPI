import {Router} from "express";
import {recipesRouter} from "./RecipesController";

export const router = Router();

router.use('/recipes', recipesRouter);
// router.use('/transformData', transformDataRouter);
