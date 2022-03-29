// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Equipo from "App/Models/Equipo";
import Database from "@ioc:Adonis/Lucid/Database";
export default class EquiposController 
{
    public async store({auth,request,response})
    {
        const Equipos=new Equipo()
        const Nombre=request.input('Nombre')
        const Presidente=request.input('Presidente')
        const DT=request.input('DT')
        const Estadio=request.input('Estadio')
        try
        {
            await auth.use('api').authenticate()
            Equipos.Nombre_Equipo=Nombre
            Equipos.Presidente_Equipo=Presidente
            Equipos.DT_Equipo=DT
            Equipos.Estadio=Estadio
            await Equipos.save()
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
            const Equipos=Database.query()
            .from('equipos')
            .select('equipos.id')
            .select('equipos.Nombre_Equipo as Nombre')
            return Equipos
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Nombre=request.input('Nombre')
        const Presidente=request.input('Presidente')
        const DT=request.input('DT')
        const Estadio=request.input('Estadio')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const Equipos=await Equipo.findOrFail(id)
            Equipos.Nombre_Equipo=Nombre
            Equipos.Presidente_Equipo=Presidente
            Equipos.DT_Equipo=DT
            Equipos.Estadio=Estadio
            await Equipos.save()
            return response.status(200)
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
    public async delete({auth,request,response,params})
    {
        try
        {
            await auth.use('api').authenticate()
            const Equipos=await Equipo.findOrFail(params.id)
            await Equipos.delete()
            
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
    public async DatosEquipoMod({auth,params,response})
    {
        try
        {
            await auth.use('api').authenticate()
            const Equipos=
            Database.query()
            .from('equipo_ligas')
            .join('equipos','equipo_ligas.Equipo','=','equipos.id')
            .join('ligas','equipo_ligas.Liga','=','ligas.id')
            .select('equipos.id')
            .select('equipos.Nombre_Equipo as Equipo')
            .select('equipos.Presidente_Equipo as Presidente')
            .select('ligas.Nombre_Liga as Liga')
            .join('estadios','equipos.Estadio','=','estadios.id')
            .select('estadios.Nombre_Estadio as Estadio')
            .join('dt','equipos.DT_Equipo','=','dt.id')
            .select('dt.Nombre_DT as Director_Tecnico')
            .where('equipos.id','=',params.id)
            return Equipos
        }catch
        {
            return response.badRequest('Algo salio mal')
        }
    }
    public async DatosEquipo({auth,response})
    {
        try
        {
            await auth.use('api').authenticate()
            const Equipos=
            Database.query()
            .from('equipo_ligas')
            .join('equipos','equipo_ligas.Equipo','=','equipos.id')
            .join('ligas','equipo_ligas.Liga','=','ligas.id')
            .select('equipos.id')
            .select('equipos.Nombre_Equipo as Equipo')
            .select('ligas.Nombre_Liga as Liga')
            .join('estadios','equipos.Estadio','=','estadios.id')
            .select('estadios.Nombre_Estadio as Estadio')
            .select('estadios.Ubicacion_Estadio as Ciudad')
            .join('dt','equipos.DT_Equipo','=','dt.id')
            .select('dt.Nombre_DT as Director_Tecnico')
            return Equipos
        }catch
        {
            return response.badRequest('Algo salio mal')
        }
    }
    
}
