// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import Federacion from "App/Models/Federacion";
export default class FederacionsController 
{
    public async store({auth,request,response})
    {
        const user=new Federacion()
        const Nombre=request.input('Nombre')
        const Presidente=request.input('Presidente')
        const Region=request.input('Region')
        const Abreviatura=request.input('Abreviatura')
        try
        {
            await auth.use('api').authenticate()
            user.Nombre_Federacion=Nombre
            user.Presidente_Federacion=Presidente
            user.Region_Federacion=Region
            user.Abreviatura_Federacion=Abreviatura
            await user.save()
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
            const federacion=Database.query()
            .from('federacion')
            .select('federacion.id')
            .select('federacion.Nombre_Federacion as Nombre')
            .select('federacion.Region_Federacion as Region')
            .select('federacion.Abreviatura_Federacion as Abreviatura')
            .select('federacion.Presidente_Federacion as Presidente')
            return federacion
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Presidente=request.input('Presidente')
        const Nombre=request.input('Nombre')
        const Region=request.input('Region')
        const Abreviatura=request.input('Abreviatura')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const federacion=await Federacion.findOrFail(id)
            federacion.Nombre_Federacion=Nombre
            federacion.Region_Federacion=Region
            federacion.Abreviatura_Federacion=Abreviatura
            federacion.Presidente_Federacion=Presidente
            await federacion.save()
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
            const federacion=await Federacion.findOrFail(params.id)
            await federacion.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
}
