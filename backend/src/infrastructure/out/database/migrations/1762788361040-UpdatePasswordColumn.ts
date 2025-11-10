import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePasswordColumn1762788361040 implements MigrationInterface {
    name = 'UpdatePasswordColumn1762788361040'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character(60) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(50) NOT NULL`);
    }

}
