import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePaymentEntity1762867771191 implements MigrationInterface {
    name = 'CreatePaymentEntity1762867771191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" numeric(10,2) NOT NULL, "paidAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "history_payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" numeric(10,2) NOT NULL, "paymentsId" uuid, "submissionId" uuid, CONSTRAINT "PK_5730c0540fc1c468e8082668447" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "history_payment" ADD CONSTRAINT "FK_c962f73a4d2180df25f5fba6f27" FOREIGN KEY ("paymentsId") REFERENCES "payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "history_payment" ADD CONSTRAINT "FK_4dca630d582861207202ec780f5" FOREIGN KEY ("submissionId") REFERENCES "submission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "history_payment" DROP CONSTRAINT "FK_4dca630d582861207202ec780f5"`);
        await queryRunner.query(`ALTER TABLE "history_payment" DROP CONSTRAINT "FK_c962f73a4d2180df25f5fba6f27"`);
        await queryRunner.query(`DROP TABLE "history_payment"`);
        await queryRunner.query(`DROP TABLE "payment"`);
    }

}
