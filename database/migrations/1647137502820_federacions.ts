import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Federacions extends BaseSchema {
  protected tableName = 'federacion'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Presidente_Federacion').notNullable()
      table.string('Nombre_Federacion').unique()
      table.string('Region_Federacion').notNullable()
      table.string('Abreviatura_Federacion').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
