import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PromoCode from '#models/promo_code'
import Merchant from '#models/merchant'
import { DateTime } from 'luxon'

export default class PromoCodeSeeder extends BaseSeeder {
  public async run(): Promise<void> {
    const merchant1 = await Merchant.findByOrFail('slug', 'amazon')
    const merchant2 = await Merchant.findByOrFail('slug', 'walmart')

    await PromoCode.createMany([
      {
        code: 'WELCOME10',
        description: 'Get 10% off your first order',
        merchant_id: merchant1.id,
        starts_at: DateTime.fromJSDate(new Date('2025-06-01')),
        expires_at: DateTime.fromJSDate(new Date('2025-12-31')),
        usage_count: 150,
        is_verified: true,
      },
      {
        code: 'SAVE20',
        description: 'Save 20% on electronics',
        merchant_id: merchant2.id,
        starts_at: DateTime.fromJSDate(new Date('2025-06-01')),
        expires_at: DateTime.fromJSDate(new Date('2025-12-31')),
        usage_count: 75,
        is_verified: false,
      },
    ])
  }
}
