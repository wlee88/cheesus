import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCheese1713337203582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // It's in the spec we need to show 5 cheeses
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", type, color) VALUES ('Cheddar', 10.99, 'A hard, off-white cheese that originated in the English village of Cheddar.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cheddar_with_mackerel.jpg/1200px-Cheddar_with_mackerel.jpg', 'hard', 'yellow'`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", type, color) VALUES ('Brie', 15.99, 'A soft, creamy cheese from the Brie region of France.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Brie-Cheese.jpg/1200px-Brie-Cheese.jpg', 'soft', 'white')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", type, color) VALUES ('Gouda', 12.99, 'A semi-hard cheese from the Netherlands.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gouda_cheese.jpg/1200px-Gouda_cheese.jpg', 'semi-hard', 'yellow')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", type, color) VALUES ('Roquefort', 19.99, 'A soft, blue cheese from the south of France.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Roquefort_cheese.jpg/1200px-Roquefort_cheese.jpg', 'soft', 'blue')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", type, color) VALUES ('Parmesan', 25.99, 'A hard, granular cheese from Italy.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Parmigiano_Reggiano_cheese.jpg/1200px-Parmigiano_Reggiano_cheese.jpg', 'hard', 'yellow')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // no-op
    }

}
