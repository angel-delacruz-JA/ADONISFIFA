import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Partido extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public local:number
  @column()
  public visitante:number
  @column()
  public Estadio:number
}
