import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Equipo extends BaseModel {
  public static table='equipos'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nombre_Equipo:string

  @column()
  public Presidente_Equipo:string

  @column()
  public DT_Equipo:number

  @column()
  public Estadio:number
}
