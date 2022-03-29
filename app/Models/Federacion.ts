import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class Federacion extends BaseModel {
  public static table='federacion'
  @column({ isPrimary: true })
  public id: number
  @column()
  public Presidente_Federacion:string
  @column()
  public Nombre_Federacion:string
  @column()
  public Region_Federacion:string
  @column()
  public Abreviatura_Federacion:string
}
