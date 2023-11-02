import {Router} from "express";
import {recipesRouter} from "./RecipesController";
import {transformDataRouter} from "./TransformDataController";

export const router = Router();

router.use('/recipes', recipesRouter);
router.use('/transformData', transformDataRouter);
