import { MigrationInterface, QueryRunner } from "typeorm";

// Seed: 1713337203582
// Create: 1713583433738
export class CreateCheeses1713337203582 implements MigrationInterface {
    name = 'CreateCheeses1713337203582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cheese" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "pricePerKilo" numeric NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "PK_20a2a572a05478574e7288f25e8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cheese"`);
    }

}
