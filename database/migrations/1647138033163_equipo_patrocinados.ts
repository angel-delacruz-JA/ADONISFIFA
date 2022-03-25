import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EquipoPatrocinados extends BaseSchema {
  protected tableName = 'equipo_patrocinador'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('Equipo').notNullable()
      .unsigned()
      .references('equipos.id')
      .onDelete('CASCADE')
      table.integer('Patrocinador').notNullable()
      .unsigned()
      .references('patrocinadores.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
