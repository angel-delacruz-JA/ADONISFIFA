// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import Dt from "App/Models/Dt";
export default class DtsController 
{
    public async store({auth,request,response})
    {
        const DT=new Dt()
        const Nombre=request.input('Nombre')
        const Nacionalidad=request.input('Nacionalidad')
        const Edad=request.input('Edad')
        try
        {
            await auth.use('api').authenticate()
            DT.Nombre_DT=Nombre
            DT.Nacionalidad_DT=Nacionalidad
            DT.Edad_DT=Edad
            await DT.save()
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
            const DT=Database.query()
            .from('dt')
            .select('dt.id')
            .select('dt.Nombre_DT as Nombre')
            .select('dt.Nacionalidad_DT as Nacionalidad')
            .select('dt.Edad_DT as Edad')
            return DT
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Nombre=request.input('Nombre')
        const Nacionalidad=request.input('Nacionalidad')
        const Edad=request.input('Edad')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const DT=await Dt.findOrFail(id)
            DT.Nombre_DT=Nombre
            DT.Nacionalidad_DT=Nacionalidad
            DT.Edad_DT=Edad
            await DT.save()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
    public async delete({auth,request,response})
    {
        const id=request.input('id')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const DT=await Dt.findOrFail(id)
            await DT.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
}
