import express from 'express';
import {router} from "./controllers/Routers";
import {sequelize} from "./dataAccess/sequelize";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use('/api', router);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => {
        console.error('Unable to connect to the database:', error)
        sequelize.close();
    });

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});
