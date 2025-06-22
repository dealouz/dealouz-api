import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { PromoCodeCategoryFactory } from '#database/factories/promo_code_category_factory'

/**
 * Seeder to populate the promo_code_categories table with dummy data
 * @class PromoCodeCategorySeeder
 */
export default class extends BaseSeeder {
  /**
   * Run the seeder
   * @returns {Promise<void>} - A promise that resolves with no return value
   */
  public async run(): Promise<void> {
    await PromoCodeCategoryFactory.createMany(5)
  }
}
