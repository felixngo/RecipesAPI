import RecipesRepository from "../dataAccess/Repositories/RecipesRepository";
import {Recipe} from "../models/entities/Recipe";
import {RecipeDto} from "../models/dto/RecipeDto";
import {RecipeDbo} from "../models/dbo/RecipeDbo";

export default class RecipesBusiness {
    private readonly _repository: RecipesRepository;

    constructor() {
        this._repository = new RecipesRepository(Recipe);
    }
    async getAll() : Promise<RecipeDto[]> {
        const recipesDbo =  await this._repository.getAll();
        return recipesDbo.map(dbo =>  { return {...dbo} as RecipeDto; });
    }

    async create(recipeDto : RecipeDto) : Promise<RecipeDto> {
        const dbo = await this._repository.create({...recipeDto} as RecipeDbo);
        return {...dbo} as RecipeDto;
    }
    async update(recipeDto : RecipeDto) : Promise<RecipeDto> {
        const dbo = await this._repository.update({...recipeDto} as RecipeDbo);
        return {...dbo} as RecipeDto;
    }
    async delete(id : number) : Promise<void> {
        await this._repository.delete(id);
    }

    async getById(id : number) : Promise<RecipeDto> {
        const dbo = await this._repository.getById(id);
        return {...dbo} as RecipeDto;
    }
}
