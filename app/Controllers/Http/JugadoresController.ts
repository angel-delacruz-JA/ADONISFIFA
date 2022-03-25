// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database"
import Equipo from "App/Models/Equipo"
import Jugadore from "App/Models/Jugadore"
export default class JugadoresController 
{
    public async store({auth,request,response})
    {
        const Jugadores=new Jugadore()
        const Nombre=request.input('Nombre_Jugador')
        const Edad=request.input('Edad_Jugador')
        const Nacionalidad=request.input('Nacionalidad_Jugador')
        const Equipo=request.input('Equipo')
        try
        {
            await auth.use('api').authenticate()
            Jugadores.Nombre_Jugador=Nombre
            Jugadores.Edad_Jugador=Edad
            Jugadores.Nacionalidad_Jugador=Nacionalidad
            Jugadores.Equipo=Equipo
            await Jugadores.save()
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
            const Jugadores=await Jugadore.all()
            return Jugadores
        }catch
        {
            response.badRequest('No tienes permiso')
        }
    }
    public async update({auth,request,response})
    {
        const id=request.input('id')
        const Nombre=request.input('Nombre_Jugador')
        const Edad=request.input('Edad_Jugador')
        const Nacionalidad=request.input('Nacionalidad_Jugador')
        const Equipo=request.input('Equipo')
        try
        {
            await auth.use('api').authenticate()
            console.log(auth.use('api').user!)
            const Jugadores=await Jugadore.findOrFail(id)
            Jugadores.Nombre_Jugador=Nombre
            Jugadores.Edad_Jugador=Edad
            Jugadores.Nacionalidad_Jugador=Nacionalidad
            Jugadores.Equipo=Equipo
            await Jugadores.save()
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
            const JugadoresJ=await Jugadore.findOrFail(id)
            await JugadoresJ.delete()
        }catch
        {
            return response.badRequest('ERROR')
        }
    }
    public async JugadorEquipo({request,auth,response})
    {
        try
        {
            await auth.use('api').authenticate()
            const JuEq=Database.query()
            .from('equipos')
            .join('jugadores','equipos.id','=','jugadores.Equipo')
            .select('jugadores.Nombre_Jugador as Jugador')
            .select('jugadores.Edad_Jugador as Edad')
            .select('jugadores.Nacionalidad_Jugador as Nacionalidad')
            .select('equipos.Nombre_Equipo as Equipo')
            return JuEq
        }catch
        {
            return response.badRequest('Hubo un error')
        }
    }
    public async JugadoresEquipo({auth,request,response})
    {
        try
        {
            await auth.use('api').authenticate()
            const Nombre_Equipo=request.input('Nombre_Equipo')
            const JugEq=Database.query()
            .from('jugadores')
            .join('equipos','jugadores.Equipo','=','equipos.id')
            .select('jugadores.Nombre_Jugador as Jugador')
            .select('jugadores.Edad_Jugador as Edad')
            .select('jugadores.Nacionalidad_Jugador as Nacionalidad')
            .where('equipos.Nombre_Equipo','=',Nombre_Equipo)
            return JugEq
        }
        catch
        {
              const mensaje="Bla, bla, bla, bla, bla, bla Ey, yo, yo-yo, yo-yo, yo-yo Yo, (la-la-la-la-la-la-la) blow, blow (la-la-la-la-la-la-la) Diablo, qué safaera Tú tiene un culo cabrón Cualquier cosa que te pongas rompes la carretera (la-la-la-la-la)Aight, muévelo, muévelo, muévelo, muévelo (la-la-la-la-la-la-la) Qué safaera (la-la-la-la-la) Tú tiene un culo cabrón Cualquier cosa que te pongas rompes la carretera Aight, (tra) muévelo, muévelo, muévelo, muévelo Qué falta de respeto, mami ¿Cómo te atreve a venir sin panty? Hoy saliste puesta pa mí Yo que pensaba que venía a dormir, no Vino ready ya, puesta pa una cepillá Me chupa la lollipop, solita se arrodilla, hey ¿Cómo te atreve, mami, a venir sin panty? Mera, dímelo, DJ Orma¿Qué tú te cree? Jodío cabrónYo hago lo que me da la gana, dícelo conejo Ey, ey Hoy se bebe, hoy se gasta Hoy se fuma como un rasta Si Dios lo permite (si Dios lo permite), ey Si Dios lo permite (que si Dios lo permite), ey Hoy se bebe, hoy se gasta Hoy se fuma como un rasta (wuh, wuh, wuh) Si Dios lo permite, ey Si Dios lo permite (yo, yo), ey Real G, orientando a la generaciones nueva, con la verdadera Bellaqueo a lo galactic Sí, pa que se te mojen los panty, métele bellaco a lo versátil Más puta que Betty Boop, la que se puso bellaca, mami, fuiste tú Sigo matando con la U Chocha con bicho, bicho con nalga (empuja) Cho-chocha con bicho, bicho con nalga, sí (empuja) Chocha con bicho, bicho con nalga (empuja) Te-te está rozando mi tetilla (empuja) Este año no quiero putilla (empuja) Te ven con mucha prenda y se quieren pegar (empuja) Te ven bien activao y se quieren pegar (empuja) Porque estás bien buena, porque estás bien buena (empújamelo completo) Tetas bien grande' como Lourdes Chacón Las nalga bien grande como Iris Chacón La chocha no sé porque no la he visto Pero vamo pa la cama a clavarte en panty Pero vamo' pa' la cama a clavarte en panty Hoy se bebe, hoy se gasta Hoy se fuma como un rasta Si Dios lo permite Si Dios lo permite, yeh-yeah Hoy se bebe, hoy se gasta Hoy se fuma como un rasta Si Dios lo permite Si Dios lo permite Mami ¿Qué tú quiere'? Aquí llegó tu tiburón Yo quiero perrearte y fumarme un blunt Ver lo que esconde ese pantalón Yo quiero perrearte y perrearte y perrearte (duro, duro) Yo-yo-yo-yo quiero perrearte y fumarme un blunt (duro, duro) Yo quiero perrearte y perrearte y perrear (duro, duro) Yo-yo-yo-yo quiero perrearte y fumarme un blunt, -me un blunt (duro, duro) La rola ya me explotó La nena bailando se botó Ese culo se merece to, se merece to, se merece to, yes Ese culo se merece to, se merece to, se merece to (ey, ey, ey, ey, ey) Ah, yo pensaba que se ponía lenta Tá bien, tá bien, vamo de nuevo, de nuevo Meren a Orma, meren a Orma que está bellaco Mi bicho anda fugao' y yo quiero que tú me lo esconda' Agárralo como bonga Se metió una pepa que la pone cachonda Chinga en lo Audi, no en lo Honda Ey, si te lo meto no me llame' Que esto no es pa que me ame, ey Si tu novio no te mama el culo Pa eso que no mame"
            return mensaje
        }
    }
}
