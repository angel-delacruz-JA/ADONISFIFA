// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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
            user.Nombre=Nombre
            user.Presidente=Presidente
            user.Region=Region
            user.Abreviatura=Abreviatura
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
            const user=await Federacion.all()
            return user
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
            federacion.Nombre=Nombre
            federacion.Region=Region
            federacion.Abreviatura=Abreviatura
            federacion.Presidente=Presidente
            await federacion.save()
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
            const federacion=await Federacion.findOrFail(id)
            await federacion.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
}
