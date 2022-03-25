// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import Ligas from "App/Models/Ligas";
export default class LigasesController 
{
    public async crearliga({auth,request,response})
    {
        const Liga=new Ligas()
        const Nombre_Liga=request.input('Nombre_Liga')
        const Presidente_Liga=request.input('Presidente_Liga')
        const Federacion_id=request.input('Federacion_id')
        try
        {
            await auth.use('api').authenticate()
            Liga.Nombre_Liga=Nombre_Liga
            Liga.Presidente_Liga=Presidente_Liga
            Liga.Federacion_id=Federacion_id
            await Liga.save()
            return response.status(200)
        }catch
        {
            return response.badRequest('No tienes permisos')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Nombre=request.input('Nombre')
        const Presidente=request.input('Presidente')
        const Federacion_id=request.input('Federacion_id')
        try
        {
            //await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const Liga=await Ligas.findOrFail(id)
            Liga.Nombre_Liga=Nombre
            Liga.Presidente_Liga=Presidente
            Liga.Federacion_id=Federacion_id
            await Liga.save()
            return response.status(200)
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
    public async ligasinfo()
    {
        const ligas= 
        Database.query()
        .from('ligas')
        .join('federacion','ligas.Federacion_id','=','federacion.id')
        .select('ligas.id')
        .select('ligas.Nombre_Liga as Liga')
        .select('ligas.Presidente_Liga as Presidente')
        .select('federacion.Nombre_Federacion as Federacion')
        .select('federacion.Abreviatura_Federacion as Abreviatura')
        return ligas
    }
}
