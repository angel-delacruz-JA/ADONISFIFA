import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
   
  @column({ isPrimary: true })
  public id: number
  
  public static table='usuarios'
  @column()
  public Nombre:string
  @column()
  public rol:number
  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string
}
