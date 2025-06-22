import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { MerchantFactory } from '#database/factories/merchant_factory'

/**
 * Seeder to populate the merchants table with dummy data
 * @class MerchantSeeder
 */
export default class extends BaseSeeder {
  /**
   * Run the seeder
   * @returns {Promise<void>} - A promise that resolves with no return value
   */
  public async run(): Promise<void> {
    await MerchantFactory.createMany(10)
  }
}
