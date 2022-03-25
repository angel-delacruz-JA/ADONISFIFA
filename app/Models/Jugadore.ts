import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Jugadore extends BaseModel {
  public static table='jugadores'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nombre_Jugador:string

  @column()
  public Edad_Jugador:number

  @column()
  public Nacionalidad_Jugador:string

  @column()
  public Equipo:number
}
