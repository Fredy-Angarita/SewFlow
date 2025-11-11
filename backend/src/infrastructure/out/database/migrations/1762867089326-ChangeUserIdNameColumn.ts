import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserIdNameColumn1762867089326 implements MigrationInterface {
    name = 'ChangeUserIdNameColumn1762867089326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignment" DROP CONSTRAINT "FK_b2188a239be9998969ae5a84e41"`);
        await queryRunner.query(`ALTER TABLE "assignment" RENAME COLUMN "userUserID" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "userID" TO "id"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "PK_46d78688eda2476cb18f7eae8a5" TO "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "assignment" ADD CONSTRAINT "FK_b3ae3ab674b9ba61a5771e906da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignment" DROP CONSTRAINT "FK_b3ae3ab674b9ba61a5771e906da"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "PK_cace4a159ff9f2512dd42373760" TO "PK_46d78688eda2476cb18f7eae8a5"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "id" TO "userID"`);
        await queryRunner.query(`ALTER TABLE "assignment" RENAME COLUMN "userId" TO "userUserID"`);
        await queryRunner.query(`ALTER TABLE "assignment" ADD CONSTRAINT "FK_b2188a239be9998969ae5a84e41" FOREIGN KEY ("userUserID") REFERENCES "user"("userID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
