import "reflect-metadata"
import { DataSource } from "typeorm"
import { CheeseEntity } from "./entity/cheese-entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "master",
    password: "password",
    database: "cheesus",
    synchronize: true,
    logging: false,
    entities: [CheeseEntity],
    migrations: [],
    subscribers: [],
})
