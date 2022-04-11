require('dotenv/config')
import { DataSource } from "typeorm";
import entities from '../models/index';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [
        entities.Product
    ],
    subscribers: [],
    migrations: [
        "./migrations/*.ts"
    ],
})