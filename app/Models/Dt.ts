import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Dt extends BaseModel {
  public static table='dt'
  @column({ isPrimary: true })
  public id: number

  @column()
  public Nombre_DT:string

  @column()
  public Nacionalidad_DT:string

  @column()
  public Edad_DT:number
}
