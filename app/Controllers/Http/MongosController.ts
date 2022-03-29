// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database"
import PartidoModelo from "App/Models/PartidoModelo"
import Partido from "App/Models/Partido"
import mongoose from "mongoose"
export default class MongosController 
{
    public async guardarMongo({request,response})
    {
        await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/fifa?retryWrites=true&w=majority')
        const id=request.input('id_partido')
        const comentarios=request.input('comentarios')
        console.log(id)
        const crear=new PartidoModelo.PartidoModelo({"id_partido":id,"comentario":[comentarios]})
        crear.save()
        return response.json(crear)
    }
    public async insertar({request,response})
    {
        try
        {
            const Partidos=new Partido()
            const local=request.input('local')
            const visitante=request.input('visitante')
            const Estadio=request.input('Estadio')
            Partidos.local=local
            Partidos.visitante=visitante
            Partidos.Estadio=Estadio
            await Partidos.save()
            return response.status(200)
        }
        catch
        {
            return response.status(500)
        }
    }
    public async modificar({request,response})
    {
        try
        {
        await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/fifa?retryWrites=true&w=majority')
        const id=request.input('id_partido')
        const comentarios=request.input('comentarios')
        console.log(id)
        response= await PartidoModelo.PartidoModelo.updateOne({"id_partido":id},{$push:{"comentario":comentarios}})
        return response
        }
        catch
        {
            return  response.badRequest('Hubo un error')
        }
    }
    public async verPartido()
    {
        const partido=Database.query()
        .select('p.id as id','local.Nombre_Equipo as Local','visitante.Nombre_Equipo as Visitante','estadio.Nombre_Estadio as Estadio')
        .from('partidos as p')
        .join('equipos as local','p.local','=','local.id')
        .join('equipos as visitante','p.visitante','=','visitante.id')
        .join('estadios as estadio','p.Estadio','=','estadio.id')
        return partido
    }
    public async verComent({params,response})
    {
        await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/fifa?retryWrites=true&w=majority')
        response=await PartidoModelo.PartidoModelo.find({"id_partido":params.id})
        return response
    } 
    public async delete({auth,response,params})
    {
        try
        {
            await auth.use('api').authenticate()
            const Equipos=await Partido.findOrFail(params.id)
            await Equipos.delete()
            
        }catch
        {
            return response.badRequest('ERROR')
        }
    }

}
