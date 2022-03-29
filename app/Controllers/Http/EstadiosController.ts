// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import Estadio from "App/Models/Estadio";
export default class EstadiosController 
{
    public async store({auth,request,response})
    {
        const Estadios=new Estadio()
        const Nombre=request.input('Nombre')
        const Ubicacion=request.input('Ubicacion')
        try
        {
            await auth.use('api').authenticate()
            Estadios.Nombre=Nombre
            Estadios.Ubicacion=Ubicacion
            await Estadios.save()
            return response.status(200)
        }catch
        {
            return response.badRequest('No tienes permisos')
        }
    }
    public async show({auth,response})
    {
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const Estadios=Database.query()
            .from('estadios')
            .select('estadios.id')
            .select('estadios.Nombre_Estadio as Nombre')
            .select('estadios.Ubicacion_Estadio as Ubicacion')
            return Estadios
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Nombre=request.input('Nombre')
        const Ubicacion=request.input('Ubicacion')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const Estadios=await Estadio.findOrFail(id)
            Estadios.Nombre=Nombre
            Estadios.Ubicacion=Ubicacion
            await Estadios.save()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
    public async delete({auth,params,response})
    {
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const Estadios=await Estadio.findOrFail(params.id)
            await Estadios.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
}
