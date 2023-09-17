import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  
  // CONVENTION METHODS
  static get table () {
    return 'users'
  }

  static get connection () {
    return 'mysql'
  }

  static get hidden () {
    return ['password']
  }

  // COLUMNS
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public flagActive: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime

  // COMPUTED PROPERTIES
  static get computed () {
    return ['fullname']
  }

  getFullname () {
    return `${this.firstname} ${this.lastname}`;
  }
}
