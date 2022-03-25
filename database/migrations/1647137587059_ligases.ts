import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ligases extends BaseSchema {
  protected tableName = 'ligas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nombre_Liga').unique()
      table.string('Presidente_Liga').notNullable()
      table.integer('Federacion_id').notNullable()
      .unsigned()
      .references('federacion.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
