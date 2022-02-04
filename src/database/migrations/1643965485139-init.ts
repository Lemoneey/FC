import {MigrationInterface, QueryRunner} from "typeorm";

export class init1643965485139 implements MigrationInterface {
    name = 'init1643965485139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("id" SERIAL NOT NULL, "started_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "players" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "players"`);
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
