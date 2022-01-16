import {MigrationInterface, QueryRunner} from "typeorm";

export class creatingTables1642358449230 implements MigrationInterface {
    name = 'creatingTables1642358449230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "login" character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "columns" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "order" integer NOT NULL,
                CONSTRAINT "PK_4ac339ccbbfed1dcd96812abbd5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "task" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "order" integer NOT NULL,
                "description" character varying NOT NULL,
                "userId" character varying,
                "boardId" character varying,
                "columnId" character varying,
                "userIdId" integer,
                "boardIdId" integer,
                "columnIdId" integer,
                CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "board" (
                "id" SERIAL NOT NULL,
                "title" character varying,
                "columns" jsonb NOT NULL,
                CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "task"
            ADD CONSTRAINT "FK_29c593b244774c65824ae1df648" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "task"
            ADD CONSTRAINT "FK_61a750180758aaf4a589ccefaa9" FOREIGN KEY ("boardIdId") REFERENCES "board"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "task"
            ADD CONSTRAINT "FK_4f196ca1ee5d10a97018d33a114" FOREIGN KEY ("columnIdId") REFERENCES "columns"("id") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "task" DROP CONSTRAINT "FK_4f196ca1ee5d10a97018d33a114"
        `);
        await queryRunner.query(`
            ALTER TABLE "task" DROP CONSTRAINT "FK_61a750180758aaf4a589ccefaa9"
        `);
        await queryRunner.query(`
            ALTER TABLE "task" DROP CONSTRAINT "FK_29c593b244774c65824ae1df648"
        `);
        await queryRunner.query(`
            DROP TABLE "board"
        `);
        await queryRunner.query(`
            DROP TABLE "task"
        `);
        await queryRunner.query(`
            DROP TABLE "columns"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
