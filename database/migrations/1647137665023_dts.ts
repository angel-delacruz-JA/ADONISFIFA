import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Dts extends BaseSchema {
  protected tableName = 'dt'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nombre_DT').notNullable()
      table.string('Nacionalidad_DT').notNullable()
      table.integer('Edad_DT').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
