import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PromoCodeSource from '#models/promo_code_source'
import PromoCode from '#models/promo_code'
import { DateTime } from 'luxon'

export default class PromoCodeSourceSeeder extends BaseSeeder {
  public async run(): Promise<void> {
    const promoCode1 = await PromoCode.findByOrFail('code', 'WELCOME10')
    const promoCode2 = await PromoCode.findByOrFail('code', 'SAVE20')

    await PromoCodeSource.createMany([
      {
        promo_code_id: promoCode1.id,
        source_url: 'https://www.amazon.com/promo/welcome10',
        discovered_at: DateTime.fromJSDate(new Date('2025-05-25')),
      },
      {
        promo_code_id: promoCode2.id,
        source_url: 'https://www.walmart.com/offers/save20',
        discovered_at: DateTime.fromJSDate(new Date('2025-06-10')),
      },
    ])
  }
}
