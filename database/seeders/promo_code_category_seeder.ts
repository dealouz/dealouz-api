import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PromoCodeCategory from '#models/promo_code_category'

export default class PromoCodeCategorySeeder extends BaseSeeder {
  public async run(): Promise<void> {
    await PromoCodeCategory.createMany([
      {
        name: 'Électronique',
        slug: 'electronique',
      },
      {
        name: 'Mode',
        slug: 'mode',
      },
      {
        name: 'Maison',
        slug: 'maison',
      },
    ])
  }
}
