import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'

export default class UserController {
  
  public async apiIndex( {} : HttpContextContract) {
    let response = {
      message: "empty context",
      result: {}
    }    
    
    response = {
        message: "ok",
        result: await User
            .query()
            .whereNull('deleted_at')
            .orderBy('id', 'asc')
            .limit(Env.get('LIMIT_PAGINATION'))
    }
    
    return response
  }

  public async getById( { params, response }: HttpContextContract) {
    
    let statusCode = 404;
    let response_ = {
      message: "empty context",
      result: {}
    }
    
    const user = await User
        .find(params.userId)
    
    if (user) {
        statusCode = 200
        response_.result = user
    }

    response.status(statusCode)

    return response_
  }


  public async index({}: HttpContextContract) {} 

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}