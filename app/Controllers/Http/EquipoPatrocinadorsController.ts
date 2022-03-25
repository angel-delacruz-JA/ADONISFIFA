// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import EquipoPatrocinador from "App/Models/EquipoPatrocinador";
export default class EquipoPatrocinadorsController 
{
    public async store({auth,request,response})
    {
        const EquipoPatrocinadores=new EquipoPatrocinador()
        const Equipo=request.input('Equipo')
        const Patrocinador=request.input('Patrocinador')
        try
        {
            await auth.use('api').authenticate()
            EquipoPatrocinadores.Equipo=Equipo
            EquipoPatrocinadores.Patrocinador=Patrocinador
            await EquipoPatrocinadores.save()
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
            const EquipoPatrocinadores=await EquipoPatrocinador.all()
            return EquipoPatrocinadores
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Equipo=request.input('Equipo')
        const Patrocinador=request.input('Patrocinador')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const EquipoPatrocinadores=await EquipoPatrocinador.findOrFail(id)
            EquipoPatrocinadores.Equipo=Equipo
            EquipoPatrocinadores.Patrocinador=Patrocinador
            await EquipoPatrocinadores.save()
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
            const EquipoPatrocinadores=await EquipoPatrocinador.findOrFail(id)
            await EquipoPatrocinadores.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
    public async EquipoPatrocinios({response})
    {
        try
        {
        const EquipoPatrocinio=
        Database.query()
        .from('equipo_patrocinador')
        .join('equipos','equipo_patrocinador.Equipo','=','equipos.id')
        .join('patrocinadores','equipo_patrocinador.Patrocinador','=','patrocinadores.id')
        .select('equipos.Nombre_Equipo as Equipo')
        .select('patrocinadores.Nombre_Patrocinador as Patrocinadores')
        return EquipoPatrocinio
        }catch
        {
            return response.badRequest('No tienes permisos')
        }
    }
}
