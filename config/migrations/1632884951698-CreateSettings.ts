import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1632884951698 implements MigrationInterface {
    //executa com run
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary:true
                    },
                    {
                        name:'username',
                        type:'varchar',
                    },
                    {
                        name: 'chat',
                        type:'boolean',
                        default:true
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: "now()"

                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: "now()"
                    }
                ]
            })
        
    )
    }


    //reversões no down
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('settings')
    }

}
