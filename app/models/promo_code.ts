import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Merchant from '#models/merchant'

/**
 * The PromoCode model represents a promotional code in the Dealouz application.
 */
export default class PromoCode extends BaseModel {
  /**
   * The unique identifier for the promo code.
   */
  @column({ isPrimary: true })
  declare public id: number

  /**
   * The promo code string (e.g., WELCOME10).
   */
  @column()
  declare public code: string

  /**
   * The description or benefit of the promo code.
   */
  @column()
  declare public description: string | null

  /**
   * The ID of the associated merchant.
   */
  @column()
  declare public merchant_id: number

  /**
   * The relationship to the Merchant model.
   */
  @belongsTo(() => Merchant)
  declare public merchant: BelongsTo<typeof Merchant>

  /**
   * The start date of the promo code's validity.
   */
  @column.dateTime()
  declare public starts_at: DateTime | null

  /**
   * The expiration date of the promo code.
   */
  @column.dateTime()
  declare public expires_at: DateTime | null

  /**
   * The number of times the promo code has been used/copied.
   */
  @column()
  declare public usage_count: number

  /**
   * Whether the promo code has been verified as valid.
   */
  @column()
  declare public is_verified: boolean

  /**
   * The timestamp when the promo code was created.
   */
  @column.dateTime({ autoCreate: true })
  declare public created_at: DateTime

  /**
   * The timestamp when the promo code was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare public updated_at: DateTime
}
