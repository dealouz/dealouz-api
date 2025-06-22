import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { PromoCodeSourceFactory } from '#database/factories/promo_code_source_factory'
import PromoCode from '#models/promo_code'

/**
 * Seeder to populate the promo_code_sources table with dummy data
 * @class PromoCodeSourceSeeder
 */
export default class extends BaseSeeder {
  /**
   * Run the seeder
   * @returns {Promise<void>} - A promise that resolves with no return value
   */
  public async run(): Promise<void> {
    const promoCodeIds: number[] = (await PromoCode.all()).map((promoCode: PromoCode) => promoCode.id)

    if (promoCodeIds.length === 0) {
      console.log('No promo codes found, PromoCodeSourceSeeder cannot assign promo_code_id.')
      return
    }

    await PromoCodeSourceFactory.merge({
      promo_code_id: promoCodeIds[Math.floor(Math.random() * promoCodeIds.length)],
    }).createMany(15)
  }
}
