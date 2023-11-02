export interface IRepository<DBEntity, ModelEntity> {
    getAll(): Promise<ModelEntity[]>;
    create(modelEntity: ModelEntity): Promise<ModelEntity>;
    update(modelEntity: ModelEntity): Promise<ModelEntity>;
    delete(id: number): Promise<void>;
    getById(id: number): Promise<ModelEntity>;
}
