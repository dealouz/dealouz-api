import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { PromoCodeFactory } from '#database/factories/promo_code_factory'
import Merchant from '#models/merchant'

/**
 * Seeder to populate the promo_codes table with dummy data
 * @class PromoCodeSeeder
 */
export default class extends BaseSeeder {
  /**
   * Run the seeder
   * @returns {Promise<void>} - A promise that resolves with no return value
   */
  public async run(): Promise<void> {
    const merchantIds: number[] = (await Merchant.all()).map((merchant: Merchant) => merchant.id)

    if (merchantIds.length === 0) {
      console.log('No merchants found, PromoCodeSeeder cannot assign merchant_id.')
      return
    }

    await PromoCodeFactory.merge({
      merchant_id: merchantIds[Math.floor(Math.random() * merchantIds.length)],
    }).createMany(50)
  }
}
