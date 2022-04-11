import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProducts1649697387949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "product",
                columns: [
                    {
                        name: "id",
                        type: "number",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type :"varchar"
                    },
                    {
                        name: "price",
                        type :"number"
                    },
                    {
                        name: "amount",
                        type :"number"
                    },
                    ,
                    {
                        name: "active",
                        type :"bool"
                    },
                    {
                        name: "createdAt",
                        type :"timestamp",
                        default: "now()"
                    },
                    {
                        name: "updatedAd",
                        type :"timestamp"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product");
    }

}
