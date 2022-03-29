import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'
export default class RoleSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Role.createMany([{
      id:1,
      Rol:'Admin'
    },
    {
      id:2,
      Rol:'Cliente'
    }
  ])
  }
}
