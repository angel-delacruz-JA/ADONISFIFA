// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PartidoModelo from "App/Models/PartidoModelo"
import mongoose from "mongoose"
export default class MongosController 
{
    public async conexion()
    {
        await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    }
    public async mostrar({response})
    {
        try
        {
            await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/fifa?retryWrites=true&w=majority')
            response=await PartidoModelo.PartidoModelo.find()
            return response
        }
        catch
        {
            return response.badRequest('Hubo un error')
        }
    }
    public async insertar({request,response})
    {
        try
        {
            await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/fifa?retryWrites=true&w=majority')
            console.log('CONEXIÓN CON EXITO')
            const id=request.input('id_partido')
            const local=request.input('local')
            const visitante=request.input('visitante')
            const Estadio=request.input('Estadio')
            const crear=new PartidoModelo.PartidoModelo({id_partido:id,local:local,visitante:visitante,Estadio:Estadio})
            await crear.save()
            return response.json(crear)
        }
        catch
        {
            return response.badRequest('Hubo un error')
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
}
