import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Jugadores extends BaseSchema {
  protected tableName = 'jugadores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('Nombre_Jugador').notNullable()
      table.integer('Edad_Jugador').notNullable()
      table.string('Nacionalidad_Jugador').notNullable()
      table.integer('Equipo').notNullable()
      .unsigned()
      .references('equipos.id')
      .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
