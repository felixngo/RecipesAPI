import fs from 'fs';
import {TransformedPersonDto} from "../models/dto/TransformedPersonDto";
import {promisify} from "util";

export default class TransformDataBusiness {
    async getTransformedData()  {
        const readFileAsync = promisify(fs.readFile)

        const data = await readFileAsync('assets/data.json', {encoding: 'utf8'});

        const json = JSON.parse(data);

        const record : Record<string, string[]> = {};
        json.forEach((person : any) => {
            if (record[person.name] === undefined) {
                record[person.name] = [];
            }
            const dateParts = person.date.split('/');
            const formattedDate = `${dateParts[1]}-${dateParts[0]}-${person.day.toString().padStart(2, '0')}`;
            record[person.name].push(formattedDate);
        });

        console.log(record);
        return Object.entries(record).map(([key, value]) => {
            return {name: key, values: value} as TransformedPersonDto;
        });
    }
}
