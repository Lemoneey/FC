import {MigrationInterface, QueryRunner} from "typeorm";

export class init1644251911298 implements MigrationInterface {
    name = 'init1644251911298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("id" SERIAL NOT NULL, "started_at" TIMESTAMP NOT NULL, CONSTRAINT "UQ_be248462cd276d0e651b745016f" UNIQUE ("started_at"), CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "players" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_1b597c8eb2fadb72240d576fd0f" UNIQUE ("name"), CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "games_players" ("id" SERIAL NOT NULL, "player_id" character varying, "game_id" TIMESTAMP, CONSTRAINT "REL_3d8ed177149f6e31f299d17c1a" UNIQUE ("player_id"), CONSTRAINT "REL_4baddb0af5536bec97f61b55ab" UNIQUE ("game_id"), CONSTRAINT "PK_214d57dfbc146281c153fd62fdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "games_players" ADD CONSTRAINT "FK_3d8ed177149f6e31f299d17c1a4" FOREIGN KEY ("player_id") REFERENCES "players"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "games_players" ADD CONSTRAINT "FK_4baddb0af5536bec97f61b55ab1" FOREIGN KEY ("game_id") REFERENCES "games"("started_at") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "games_players" DROP CONSTRAINT "FK_4baddb0af5536bec97f61b55ab1"`);
        await queryRunner.query(`ALTER TABLE "games_players" DROP CONSTRAINT "FK_3d8ed177149f6e31f299d17c1a4"`);
        await queryRunner.query(`DROP TABLE "games_players"`);
        await queryRunner.query(`DROP TABLE "players"`);
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
