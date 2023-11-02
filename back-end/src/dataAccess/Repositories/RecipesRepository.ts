import {Recipe} from "../../models/entities/Recipe";
import {RecipeDbo} from "../../models/dbo/RecipeDbo";
import {Repository} from "./Repository";

export default class RecipesRepository extends Repository<Recipe, RecipeDbo>
{
}
