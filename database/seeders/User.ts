import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
		{
			firstname: 'Daniel',
			lastname: 'Dueñas',
			email: 'dduenas@niomads.com',
			password: await Hash.make('niomads2023.')
		}
    ])
  }
}
