// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EquipoLigas from "App/Models/EquipoLigas";
export default class EquipoLigasesController 
{
    public async store({auth,request,response})
    {
        const EquipoLiga=new EquipoLigas()
        const Equipo=request.input('Equipo')
        const Liga=request.input('Liga')
        try
        {
            await auth.use('api').authenticate()
            EquipoLiga.Equipo=Equipo
            EquipoLiga.Liga=Liga
            await EquipoLiga.save()
        }catch
        {
        }
    }
    public async show({auth,response})
    {
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const EquipoLiga=await EquipoLigas.all()
            return EquipoLiga
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Equipo=request.input('Equipo')
        const Liga=request.input('Liga')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const EquipoLiga=await EquipoLigas.findOrFail(id)
            EquipoLiga.Equipo=Equipo
            EquipoLiga.Liga=Liga
            await EquipoLiga.save()
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
            const EquipoLiga=await EquipoLigas.findOrFail(id)
            await EquipoLiga.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
}
