import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class WhatsappController {

    public async login( { auth, request, response } : HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
      
        // Lookup user manually
        const user = await User
            .query()
            .where('email', email)
            .where('flag_active', true)
            .firstOrFail()
      
        // Verify password
        if (!(await Hash.verify(user.password, password))) {
            return response.unauthorized('Invalid credentials')
        }
      
        // Generate token
        const token = await auth.use('api').generate(user)
      
        return token
    }

    public async logout( { auth } : HttpContextContract) {
        await auth.use('api').logout()        
        return "ok"
    }
}