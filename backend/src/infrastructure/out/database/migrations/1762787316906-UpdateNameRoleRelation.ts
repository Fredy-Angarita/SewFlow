import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNameRoleRelation1762787316906 implements MigrationInterface {
    name = 'UpdateNameRoleRelation1762787316906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_3ebc4ed1507ed6edfa89fb74543"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "roleIDId" TO "roleId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "roleId" TO "roleIDId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_3ebc4ed1507ed6edfa89fb74543" FOREIGN KEY ("roleIDId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
