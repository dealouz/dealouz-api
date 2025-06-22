import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

/**
 * The Merchant model represents a merchant in the Dealouz application.
 */
export default class Merchant extends BaseModel {
  /**
   * The unique identifier for the merchant.
   */
  @column({ isPrimary: true })
  // @required @example(1)
  declare public id: number

  /**
   * The name of the merchant (e.g., Amazon).
   */
  @column()
  // @required @example('Amazon')
  declare public name: string

  /**
   * The slug for the merchant's URL (e.g., amazon).
   */
  @column()
  // @required @example('amazon')
  declare public slug: string

  /**
   * The description of the merchant for SEO or merchant page.
   */
  @column()
  // @example('Amazon is a global e-commerce platform.')
  declare public description: string | null

  /**
   * The URL of the merchant's logo.
   */
  @column()
  // @example('https://example.com/logo.png')
  declare public logo_url: string | null

  /**
   * The official website URL of the merchant.
   */
  @column()
  // @example('https://www.amazon.com')
  declare public website_url: string | null

  /**
   * The SEO meta title for the merchant.
   */
  @column()
  // @example('Amazon - Shop Online for Electronics, Apparel, Toys, Books, and More')
  declare public meta_title: string | null

  /**
   * The SEO meta description for the merchant.
   */
  @column()
  // @example('Shop at Amazon for electronics, apparel, toys, books, and more. Free shipping on eligible orders.')
  declare public meta_desc: string | null

  /**
   * The timestamp when the merchant was created.
   */
  @column.dateTime({ autoCreate: true })
  declare public created_at: DateTime

  /**
   * The timestamp when the merchant was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare public updated_at: DateTime
}
