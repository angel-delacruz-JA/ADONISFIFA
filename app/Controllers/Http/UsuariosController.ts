// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import authConfig from "Config/auth";
export default class UsuariosController 
{
    public async store({auth,request,response})
    {
        const user=new User()
        const Nombre=request.input('Nombre')
        const email=request.input('email')
        const password=request.input('password')
        const rol=2
        try
        {
            user.Nombre=Nombre
            user.email=email
            user.password=password
            user.rol=rol
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
            const user=await User.all()
            return user
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Nombre=request.input('Nombre')
        const email=request.input('email')
        const password=request.input('password')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const user=await User.findOrFail(id)
            user.Nombre=Nombre
            user.email=email
            user.password=password
            await user.save()
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
            const user=await User.findOrFail(id)
            await user.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
}
