import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAssignmentAndSubmissionEntity1762866692379 implements MigrationInterface {
    name = 'CreateAssignmentAndSubmissionEntity1762866692379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "submission" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" smallint NOT NULL, "paid" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "assignmentId" uuid, CONSTRAINT "PK_7faa571d0e4a7076e85890c9bd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assignment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" smallint NOT NULL, "price" numeric(10,2) NOT NULL, "closed" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userUserID" uuid, "clothingId" uuid, CONSTRAINT "PK_43c2f5a3859f54cedafb270f37e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "submission" ADD CONSTRAINT "FK_ef99745f278ca701c5efe5d8ddd" FOREIGN KEY ("assignmentId") REFERENCES "assignment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assignment" ADD CONSTRAINT "FK_b2188a239be9998969ae5a84e41" FOREIGN KEY ("userUserID") REFERENCES "user"("userID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assignment" ADD CONSTRAINT "FK_0069b4da213d93d4163d4ad3f2f" FOREIGN KEY ("clothingId") REFERENCES "clothing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignment" DROP CONSTRAINT "FK_0069b4da213d93d4163d4ad3f2f"`);
        await queryRunner.query(`ALTER TABLE "assignment" DROP CONSTRAINT "FK_b2188a239be9998969ae5a84e41"`);
        await queryRunner.query(`ALTER TABLE "submission" DROP CONSTRAINT "FK_ef99745f278ca701c5efe5d8ddd"`);
        await queryRunner.query(`DROP TABLE "assignment"`);
        await queryRunner.query(`DROP TABLE "submission"`);
    }

}
