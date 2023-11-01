import {Sequelize} from 'sequelize';
import {AppConstant} from "../AppConstant";

export const sequelize = new Sequelize(
    AppConstant.DB_URI,
);
