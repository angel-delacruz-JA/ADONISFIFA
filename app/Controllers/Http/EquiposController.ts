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
            const mensaje="Bla, bla, bla, bla, bla, bla Ey, yo, yo-yo, yo-yo, yo-yo Yo, (la-la-la-la-la-la-la) blow, blow (la-la-la-la-la-la-la) Diablo, qué safaera Tú tiene un culo cabrón Cualquier cosa que te pongas rompes la carretera (la-la-la-la-la)Aight, muévelo, muévelo, muévelo, muévelo (la-la-la-la-la-la-la) Qué safaera (la-la-la-la-la) Tú tiene un culo cabrón Cualquier cosa que te pongas rompes la carretera Aight, (tra) muévelo, muévelo, muévelo, muévelo Qué falta de respeto, mami ¿Cómo te atreve a venir sin panty? Hoy saliste puesta pa mí Yo que pensaba que venía a dormir, no Vino ready ya, puesta pa una cepillá Me chupa la lollipop, solita se arrodilla, hey ¿Cómo te atreve, mami, a venir sin panty? Mera, dímelo, DJ Orma¿Qué tú te cree? Jodío cabrónYo hago lo que me da la gana, dícelo conejo Ey, ey Hoy se bebe, hoy se gasta Hoy se fuma como un rasta Si Dios lo permite (si Dios lo permite), ey Si Dios lo permite (que si Dios lo permite), ey Hoy se bebe, hoy se gasta Hoy se fuma como un rasta (wuh, wuh, wuh) Si Dios lo permite, ey Si Dios lo permite (yo, yo), ey Real G, orientando a la generaciones nueva, con la verdadera Bellaqueo a lo galactic Sí, pa que se te mojen los panty, métele bellaco a lo versátil Más puta que Betty Boop, la que se puso bellaca, mami, fuiste tú Sigo matando con la U Chocha con bicho, bicho con nalga (empuja) Cho-chocha con bicho, bicho con nalga, sí (empuja) Chocha con bicho, bicho con nalga (empuja) Te-te está rozando mi tetilla (empuja) Este año no quiero putilla (empuja) Te ven con mucha prenda y se quieren pegar (empuja) Te ven bien activao y se quieren pegar (empuja) Porque estás bien buena, porque estás bien buena (empújamelo completo) Tetas bien grande' como Lourdes Chacón Las nalga bien grande como Iris Chacón La chocha no sé porque no la he visto Pero vamo pa la cama a clavarte en panty Pero vamo' pa' la cama a clavarte en panty Hoy se bebe, hoy se gasta Hoy se fuma como un rasta Si Dios lo permite Si Dios lo permite, yeh-yeah Hoy se bebe, hoy se gasta Hoy se fuma como un rasta Si Dios lo permite Si Dios lo permite Mami ¿Qué tú quiere'? Aquí llegó tu tiburón Yo quiero perrearte y fumarme un blunt Ver lo que esconde ese pantalón Yo quiero perrearte y perrearte y perrearte (duro, duro) Yo-yo-yo-yo quiero perrearte y fumarme un blunt (duro, duro) Yo quiero perrearte y perrearte y perrear (duro, duro) Yo-yo-yo-yo quiero perrearte y fumarme un blunt, -me un blunt (duro, duro) La rola ya me explotó La nena bailando se botó Ese culo se merece to, se merece to, se merece to, yes Ese culo se merece to, se merece to, se merece to (ey, ey, ey, ey, ey) Ah, yo pensaba que se ponía lenta Tá bien, tá bien, vamo de nuevo, de nuevo Meren a Orma, meren a Orma que está bellaco Mi bicho anda fugao' y yo quiero que tú me lo esconda' Agárralo como bonga Se metió una pepa que la pone cachonda Chinga en lo Audi, no en lo Honda Ey, si te lo meto no me llame' Que esto no es pa que me ame, ey Si tu novio no te mama el culo Pa eso que no mame"
            return mensaje
        }
    }
    
}
