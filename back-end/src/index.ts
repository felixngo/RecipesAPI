import express, { Request, Response } from 'express';
import {router} from "./controllers/Routers";
import {sequelize} from "./dataAccess/sequelize";

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', router);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
