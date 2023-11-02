import {Request, Response, Router} from "express";
import TransformDataBusiness from "../business/TransformDataBusiness";

export const transformDataRouter = Router();

const transformDataBusiness = new TransformDataBusiness();

function transformData(req: Request, res: Response) {
    transformDataBusiness.getTransformedData().then(transformDto => res.send(transformDto))
        .catch((error) => {
           res.status(500).send(error)
        });
}

transformDataRouter.get('/', transformData);


