import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClothingEntity1762801136714 implements MigrationInterface {
    name = 'CreateClothingEntity1762801136714'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clothing" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "description" text NOT NULL, "imageUrl" character varying NOT NULL, "production_cost" numeric(10,2) NOT NULL, "sizeId" integer, CONSTRAINT "PK_43489b6750d2a415a2f8254e757" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "size" ("id" SERIAL NOT NULL, "size" character varying(15) NOT NULL, CONSTRAINT "PK_66e3a0111d969aa0e5f73855c7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clothing" ADD CONSTRAINT "FK_ac7e754981e356846a6682ad91c" FOREIGN KEY ("sizeId") REFERENCES "size"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clothing" DROP CONSTRAINT "FK_ac7e754981e356846a6682ad91c"`);
        await queryRunner.query(`DROP TABLE "size"`);
        await queryRunner.query(`DROP TABLE "clothing"`);
    }

}
