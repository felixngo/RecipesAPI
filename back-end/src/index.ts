import express, { Request, Response } from 'express';
import {router} from "./controllers/Routers";

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', router);

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
