import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cheese } from "./entity/Cheese"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "master",
    password: "password",
    database: "cheesus",
    synchronize: true,
    logging: false,
    entities: [Cheese],
    migrations: [],
    subscribers: [],
})
