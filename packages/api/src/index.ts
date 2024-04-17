import { AppDataSource } from "./data-source"
import { CheeseEntity } from "./entity/cheese-entity"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function connectDb() {
    AppDataSource.initialize().then(async () => {
        console.log("Inserting a new cheese into the database...")
        const cheese = new CheeseEntity()
        cheese.name = 'Brie'
        cheese.pricePerKilo = 10.99
        cheese.description = 'A soft cow cheese from France'
        cheese.color = 'yellow'
        cheese.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Brie.jpg/800px-Brie.jpg'
        cheese.type = 'soft'

        await AppDataSource.manager.save(cheese)
        console.log("Saved a new Cheese with id: " + cheese.id)

        console.log("Loading cheeses from the database...")
        const cheeses = await AppDataSource.manager.find(CheeseEntity)
        console.log("Loaded cheeses: ", cheeses)

    }).catch(error => console.log(error))
}

async function bootstrap() {
    connectDb()
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
