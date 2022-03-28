import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Partidos extends BaseSchema {
  protected tableName = 'partidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('local').notNullable()
      .unsigned()
      .references('equipos.id')
      .onDelete('CASCADE')
      table.integer('visitante').notNullable()
      .unsigned()
      .references('equipos.id')
      .onDelete('CASCADE')
      table.integer('Estadio').notNullable()
      .unsigned()
      .references('estadios.id')
      .onDelete('CASCADE')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
