import hash from '@adonisjs/core/services/hash'
import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import env from '#start/env'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { Hash } from '@adonisjs/hash'
import { compose } from '@adonisjs/core/helpers'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import UserRole from '#models/user_role'

/**
 * Fonction de mixin pour la gestion de l'authentification.
 * Doc : https://docs.adonisjs.com/guides/authentication/verifying-user-credentials
 */
const AuthFinder: ReturnType<typeof withAuthFinder> = withAuthFinder((): Hash => hash.use(), {
  uids: ['email'],
  passwordColumnName: 'password',
})

/**
 * The User model represents a user of the application.
 */
export default class User extends compose(BaseModel, AuthFinder) {
  /**
   * The unique identifier for the user.
   */
  @column({ isPrimary: true })
  declare public id: number

  /**
   * The role ID associated with the user.
   */
  @column()
  declare public role_id: number

  /**
   * The relationship to the Role model.
   */
  @belongsTo((): typeof UserRole => UserRole)
  declare public role: BelongsTo<typeof UserRole>

  /**
   * The last name of the user.
   */
  @column()
  declare public lastname: string

  /**
   * The first name of the user.
   */
  @column()
  declare public firstname: string

  /**
   * The email address of the user. Must be unique.
   */
  @column()
  declare public email: string

  /**
   * The hashed password of the user.
   * This field is hidden in serialized responses.
   */
  @column({ serializeAs: null })
  declare public password: string

  /**
   * Whether the user account is active.
   */
  @column()
  declare public is_active: boolean

  /**
   * The 6-digit active code for the user.
   */
  @column()
  declare public active_code: number

  /**
   * The timestamp when the user was created.
   */
  @column.dateTime({ autoCreate: true })
  declare public created_at: DateTime

  /**
   * The timestamp when the user was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare public updated_at: DateTime

  /**
   * The access token provider for the user model.
   * This provider is used to generate and validate access tokens for the user.
   */
  public static accessTokens: DbAccessTokensProvider<typeof User> = DbAccessTokensProvider.forModel(User, {
    expiresIn: env.get('API_USER_TOKEN_EXPIRATION'),
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: env.get('API_USER_TOKEN_SECRET_LENGTH'),
  })
}
