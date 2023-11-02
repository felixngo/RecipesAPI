import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import {sequelize} from "../../dataAccess/sequelize";

class Recipe extends Model<InferAttributes<Recipe>, InferCreationAttributes<Recipe>>
{
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: string;
    declare ingredients: string[];
    declare instructions: string;
}

export {
    Recipe
}
