import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EquipoLigas extends BaseSchema {
  protected tableName = 'equipo_ligas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('Equipo').notNullable()
      .unsigned()
      .references('equipos.id')
      .onDelete('CASCADE')
      table.integer('Liga').notNullable()
      .unsigned()
      .references('ligas.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
