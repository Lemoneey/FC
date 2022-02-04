import {MigrationInterface, QueryRunner} from "typeorm";

export class GameEntityRefactor1643970542069 implements MigrationInterface {
    name = 'GameEntityRefactor1643970542069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "started_at" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games" ALTER COLUMN "started_at" SET DEFAULT now()`);
    }

}
