import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import PromoCode from '#models/promo_code'
import PromoCodeCategory from '#models/promo_code_category'

/**
 * The PromoCodeCategoryAssignment model represents the many-to-many relationship between promo codes and categories.
 */
export default class PromoCodeCategoryAssignment extends BaseModel {
  /**
   * The unique identifier for the assignment record.
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
   * The ID of the associated promo code category.
   */
  @column()
  // @required @example(1)
  declare public promo_code_category_id: number

  /**
   * The relationship to the PromoCodeCategory model.
   */
  @belongsTo(() => PromoCodeCategory)
  declare public category: BelongsTo<typeof PromoCodeCategory>

  /**
   * The timestamp when the assignment record was created.
   */
  @column.dateTime({ autoCreate: true })
  // @required @example('2023-10-01T12:00:00Z')
  declare public created_at: DateTime

  /**
   * The timestamp when the assignment record was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  // @example('2023-10-01T12:00:00Z')
  declare public updated_at: DateTime | null
}
