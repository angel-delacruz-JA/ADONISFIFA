import { DateTime } from 'luxon'
import mongoose from 'mongoose'
import {Schema,model} from 'mongoose'
export default class PartidoModelo {
  
  static partidoschema=new Schema({
    id_partido:String,
    local:Number,
    visitante:Number,
    Estadio:Number,
    comentario:Array
  },{
    versionKey:false
  });
  static PartidoModelo:any=model('Partidos',this.partidoschema)
}
