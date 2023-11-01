export const AppConstant = {
    PORT: process.env.PORT || 3000,
    RECIPES_DATABASE_USER: process.env.RECIPES_DATABASE_USER || 'postgres',
    RECIPES_DATABASE_PASSWORD: process.env.RECIPES_DATABASE_PASSWORD || 'pass',
    RECIPES_DATABASE_HOST: process.env.RECIPES_DATABASE_HOST || 'localhost',
    RECIPES_DATABASE_PORT: process.env.RECIPES_DATABASE_PORT || 5432,
    DB_URI: ''
}

AppConstant.DB_URI = `postgres://${AppConstant.RECIPES_DATABASE_USER}:${AppConstant.RECIPES_DATABASE_PASSWORD}@${AppConstant.RECIPES_DATABASE_HOST}:${AppConstant.RECIPES_DATABASE_PORT}/recipes_database`;
