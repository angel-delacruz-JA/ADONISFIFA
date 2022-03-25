import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Patrocinadore extends BaseModel {
  public static table='patrocinadores'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nombre:string
}
