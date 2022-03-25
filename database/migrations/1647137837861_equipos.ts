import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Equipos extends BaseSchema {
  protected tableName = 'equipos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nombre_Equipo').unique()
      table.string('Presidente_Equipo').notNullable()
      table.integer('DT_Equipo').notNullable()
      .unsigned()
      .references('dt.id')
      .onDelete('CASCADE')
      table.integer('Estadio').notNullable()
      .unsigned()
      .references('estadios.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
