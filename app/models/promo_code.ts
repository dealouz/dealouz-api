import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Merchant from '#models/merchant'
import PromoCodeCategory from '#models/promo_code_category'

/**
 * The PromoCode model represents a promotional code in the Dealouz application.
 */
export default class PromoCode extends BaseModel {
  /**
   * The unique identifier for the promo code.
   */
  @column({ isPrimary: true })
  // @required @example(1)
  declare public id: number

  /**
   * The promo code string (e.g., WELCOME10).
   */
  @column()
  // @required @example('WELCOME10')
  declare public code: string

  /**
   * The description or benefit of the promo code.
   */
  @column()
  // @example('Get 10% off your first purchase')
  declare public description: string | null

  /**
   * The ID of the associated merchant.
   */
  @column()
  // @required @example(1)
  declare public merchant_id: number

  /**
   * The relationship to the Merchant model.
   */
  @belongsTo(() => Merchant)
  declare public merchant: BelongsTo<typeof Merchant>

  /**
   * The relationship to the PromoCodeCategory model (many-to-many).
   */
  @manyToMany(() => PromoCodeCategory, {
    pivotTable: 'promo_code_category_assignments',
    pivotForeignKey: 'promo_code_id',
    pivotRelatedForeignKey: 'promo_code_category_id',
  })
  declare public categories: ManyToMany<typeof PromoCodeCategory>

  /**
   * The start date of the promo code's validity.
   */
  @column.dateTime()
  // @example('2023-10-01T00:00:00Z')
  declare public starts_at: DateTime | null

  /**
   * The expiration date of the promo code.
   */
  @column.dateTime()
  // @example('2023-12-31T23:59:59Z')
  declare public expires_at: DateTime | null

  /**
   * The number of times the promo code has been used/copied.
   */
  @column()
  // @required @example(0)
  declare public usage_count: number

  /**
   * Whether the promo code has been verified as valid.
   */
  @column()
  // @required @example(true)
  declare public is_verified: boolean

  /**
   * The timestamp when the promo code was created.
   */
  @column.dateTime({ autoCreate: true })
  // @required @example('2023-10-01T00:00:00Z')
  declare public created_at: DateTime

  /**
   * The timestamp when the promo code was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  // @required @example('2023-10-01T00:00:00Z')
  declare public updated_at: DateTime
}
