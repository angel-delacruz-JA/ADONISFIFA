import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class Federacion extends BaseModel {
  public static table='federacion'
  @column({ isPrimary: true })
  public id: number
  @column()
  public Presidente:string
  @column()
  public Nombre:string
  @column()
  public Region:string
  @column()
  public Abreviatura:string
}
