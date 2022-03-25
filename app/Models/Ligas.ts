import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ligas extends BaseModel {
  public static table='ligas'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nombre_Liga:string

  @column()
  public Presidente_Liga:string

  @column()
  public Federacion_id:number
}
