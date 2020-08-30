import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointments1598819008070 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /**
     * Nesse metodo fica tudo aquilo que deve ser feito no banco de dados ao executar essa migration
     * Alteracoes, criacao de tabelas
     */
    await queryRunner.createTable(
      new Table({
        name: "appointments",
        columns: [
          {
            name: "id",
            type: "varchar", // Uuid - String
            isPrimary: true, // primary key
            generationStrategy: "uuid", // primary key
            default: 'uuid_generate_v4()'
          },
          {
            name: "provider",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "date",
            type: "timestamp with time zone", // esse tipo so existe para o postgres, caso utilizar outro banco, deve ser do tipo timestamp
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /**
     * Nesse metodo fica tudo aquilo que for fallback doque foi  feito no banco de dados ao executar essa migration
     * Desfaz o metodo up
     * Alteracoes, criacao de tabelas
     */
    await queryRunner.dropTable('appointments')
  }
}
