import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Estadios extends BaseSchema {
  protected tableName = 'estadios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nombre_Estadio').unique().notNullable()
      table.string('Ubicacion_Estadio').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
