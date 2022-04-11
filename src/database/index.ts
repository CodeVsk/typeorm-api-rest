import { DataSource } from "typeorm";
import entities from '../models/index';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "secret",
    database: "crud_typeorm",
    synchronize: true,
    logging: false,
    entities: [
        entities.Product
    ],
    subscribers: [],
    migrations: [],
})