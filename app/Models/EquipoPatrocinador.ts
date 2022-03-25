import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EquipoPatrocinador extends BaseModel {
  public static table='equipo_patrocinador'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Equipo:number

  @column()
  public Patrocinador:number
}
