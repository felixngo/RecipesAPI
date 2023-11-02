import {DataTypes, Sequelize} from 'sequelize';
import {AppConstant} from "../AppConstant";
import {Recipe} from "../models/entities/Recipe";

export const sequelize = new Sequelize(
    AppConstant.DB_URI,
);

Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize,
    tableName: 'recipes',
});

(async () => {
    await sequelize.sync().then(() => console.log('Database synced'))
        .catch((error) => console.error('Unable to sync database:', error));
})();
