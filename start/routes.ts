/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
import('App/Middleware/Auth')
Route.group(()=>{
    Route.get('/getInfoUser','AuthController.getUser')
    Route.post('/agregarEquipo/:request','EquiposController.store')
    Route.get('/getDt','DtsController.show')
    Route.post('/addDt/:request','DtsController.store')
    Route.put('/modDt/:request','DtsController.update')
    Route.delete('/deleteDt/:request','DtsController.delete')
    Route.post('/addLiga/:request','LigasesController.crearliga')
    Route.put('/modliga/:request','LigasesController.update')
    Route.get('/getEstadios','EstadiosController.show')
    Route.post('/getUser/:request','UsuariosController.show')
    Route.get('/logout','AuthController.Logout')
    Route.get('/getEquipo','EquiposController.show')
    Route.post('/storeEquipoLiga/:request','EquipoLigasesController.store')
    Route.get('/getEquipos','EquiposController.DatosEquipo')
    Route.get('/getEquiPat','EquipoPatrocinadorsController.EquipoPatrocinios')
    Route.get('/getJugadores','JugadoresController.JugadorEquipo')
    Route.post('/getJugadoresEQ/:request','JugadoresController.JugadoresEquipo')
    Route.get('/getLigas','LigasesController.ligasinfo')
    Route.put('/updateEquipo/:request','EquiposController.update')
    Route.delete('/deleteEquipo/:id','EquiposController.delete')
    Route.post('/guardarPartido/:request','MongosController.insertar')
    Route.put('/modificarPartido/:request','MongosController.modificar')
    Route.get('/verPartidos','MongosController.mostrar')
}).middleware('auth:api')
Route.get('/getRol','AuthController.validarrol')
Route.post('/login/:request','AuthController.Login')
Route.post('/storeUser/:request','UsuariosController.store')



