import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nombre').notNullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.integer('rol').notNullable()
      .unsigned()
      .references('roles.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
