import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

/**
 * The PromoCodeCategory model represents a category for promo codes.
 */
export default class PromoCodeCategory extends BaseModel {
  /**
   * The unique identifier for the promo code category.
   */
  @column({ isPrimary: true })
  declare public id: number

  /**
   * The name of the category (e.g., Électronique).
   */
  @column()
  declare public name: string

  /**
   * The slug for the category's URL (e.g., electronique).
   */
  @column()
  declare public slug: string

  /**
   * The timestamp when the category was created.
   */
  @column.dateTime({ autoCreate: true })
  declare public created_at: DateTime

  /**
   * The timestamp when the category was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare public updated_at: DateTime
}
