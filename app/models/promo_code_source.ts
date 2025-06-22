import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import PromoCode from '#models/promo_code'

/**
 * The PromoCodeSource model represents the source of a promo code.
 */
export default class PromoCodeSource extends BaseModel {
  /**
   * The unique identifier for the promo code source.
   */
  @column({ isPrimary: true })
  // @required @example(1)
  declare public id: number

  /**
   * The ID of the associated promo code.
   */
  @column()
  // @required @example(1)
  declare public promo_code_id: number

  /**
   * The relationship to the PromoCode model.
   */
  @belongsTo(() => PromoCode)
  declare public promo_code: BelongsTo<typeof PromoCode>

  /**
   * The URL of the source where the promo code was found.
   */
  @column()
  // @required @example('https://example.com/promo-code')
  declare public source_url: string

  /**
   * The timestamp when the promo code was discovered.
   */
  @column.dateTime({ autoCreate: true })
  // @required @example('2023-10-01T12:00:00Z')
  declare public discovered_at: DateTime
}
