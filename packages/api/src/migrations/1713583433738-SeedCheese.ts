import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCheese1713337203582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // It's in the spec we need to show 5 cheeses
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Cheddar', 10.99, 'A hard, off-white cheese that originated in the English village of Cheddar.', 'https://placehold.co/600x400/png', 'yellow')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Brie', 15.99, 'A soft, creamy cheese from the Brie region of France.', 'https://placehold.co/600x400/png', 'white')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Gouda', 12.99, 'A semi-hard cheese from the Netherlands.', 'https://placehold.co/600x400/png',  'yellow')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Roquefort', 19.99, 'A soft, blue cheese from the south of France.', 'https://placehold.co/600x400/png', 'blue')`)
        await queryRunner.query(`INSERT INTO cheese (name, "pricePerKilo", description, "imageUrl", color) VALUES ('Parmesan', 25.99, 'A hard, granular cheese from Italy.', 'https://placehold.co/600x400/png', 'yellow')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // no-op
    }

}
