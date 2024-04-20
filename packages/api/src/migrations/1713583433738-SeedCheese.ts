import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCheese1713337203582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // It's in the spec we need to show 5 cheeses
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Cheddar', 10.99, 'A hard, off-white cheese that originated in the English village of Cheddar.', '/assets/cheddar.jpg', 'yellow')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Brie', 15.99, 'A soft, creamy cheese from the Brie region of France.', '/assets/brie.jpg', 'white')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Gouda', 12.99, 'A semi-hard cheese from the Netherlands.', '/assets/gouda.jpg',  'yellow')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Roquefort', 19.99, 'A soft, blue cheese from the south of France.', '/assets/roquefort.jpg', 'blue')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Parmesan', 25.99, 'A hard, granular cheese from Italy.', '/assets/parmesan.jpg', 'yellow')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // no-op
    }

}
