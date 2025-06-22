import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import PromoCode from '#models/promo_code'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

/**
 * The PromoCodeCategory model represents a category for promo codes.
 */
export default class PromoCodeCategory extends BaseModel {
  /**
   * The unique identifier for the promo code category.
   */
  @column({ isPrimary: true })
  // @required @example(1)
  declare public id: number

  /**
   * The name of the category (e.g., Électronique).
   */
  @column()
  // @required @example('Électronique')
  declare public name: string

  /**
   * The slug for the category's URL (e.g., electronique).
   */
  @column()
  // @required @example('electronique')
  declare public slug: string

  /**
   * The relationship to the PromoCode model (many-to-many).
   */
  @manyToMany(() => PromoCode, {
    pivotTable: 'promo_code_category_assignments',
    pivotForeignKey: 'promo_code_category_id',
    pivotRelatedForeignKey: 'promo_code_id',
  })
  declare public promo_codes: ManyToMany<typeof PromoCode>

  /**
   * The timestamp when the category was created.
   */
  @column.dateTime({ autoCreate: true })
  // @required @example('2023-10-01T12:00:00Z')
  declare public created_at: DateTime

  /**
   * The timestamp when the category was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  // @required @example('2023-10-01T12:00:00Z')
  declare public updated_at: DateTime
}
