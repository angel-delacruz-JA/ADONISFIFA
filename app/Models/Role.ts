import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Role extends BaseModel {
  public static table='roles'
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public Rol:string
}
