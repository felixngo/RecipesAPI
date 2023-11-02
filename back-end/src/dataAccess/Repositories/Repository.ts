import {IRepository} from "./IRepository";
import {Model, ModelStatic} from "sequelize";
import {IObjectWithId} from "../../models/dbo/IObjectWithId";
import {InternalServerError, NotFound} from "http-errors";

export class Repository<DBEntity extends Model, ModelEntity extends IObjectWithId> implements IRepository<DBEntity, ModelEntity> {
    constructor(private readonly model: ModelStatic<DBEntity>) {}

    async getAll(): Promise<ModelEntity[]> {
        try {
            const entities = await this.model.findAll();
            return entities.map(entity => entity.toJSON() as ModelEntity);
        }
        catch (error)
        {
            throw new InternalServerError("Server error occurred" + error)
        }

    }

    async getById(id: number): Promise<ModelEntity> {
        const entity = await this.model.findByPk(id);

        if (!entity) {
            throw new NotFound(`Entity with id ${id} not found`);
        }

        return entity?.toJSON() as ModelEntity;
    }

    async create(modelEntity: any): Promise<ModelEntity> {
        try {
            const entity = await this.model.create(modelEntity);
            return entity.toJSON() as ModelEntity;
        }
        catch (error)
        {
            throw new InternalServerError("Server error occurred" + error)
        }

    }

    async update(modelEntity: ModelEntity): Promise<ModelEntity> {
        try {
            const entity = await this.model.findByPk(modelEntity.id);
            if (!entity) {
                throw new NotFound(`Entity with id ${modelEntity.id} not found`);
            }

            for (const [key, value] of Object.entries(modelEntity))
            {
                (entity as any)[key] = value;
            }

            const updatedEntity = await entity.save();

            return updatedEntity.toJSON() as ModelEntity;
        }
        catch (error)
        {
            throw new InternalServerError("Server error occurred" + error)
        }

    }

    async delete(id: number): Promise<void> {
        try {
            const entity = await this.model.findByPk(id);
            if (!entity) {
                throw new NotFound(`Entity with id ${id} not found`);
            }

            await entity.destroy();
        }
        catch (error)
        {
            throw new InternalServerError("Server error occurred" + error)
        }
    }

}
