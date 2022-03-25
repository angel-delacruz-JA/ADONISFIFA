import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Estadio extends BaseModel {
  public static table='estadios'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nombre:string

  @column()
  public Ubicacion:string
}
