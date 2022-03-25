import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EquipoLigas extends BaseModel {
  public static table='equipo_ligas'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Equipo:number

  @column()
  public Liga:number
}
