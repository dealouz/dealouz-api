import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Merchant from '#models/merchant'

export default class MerchantSeeder extends BaseSeeder {
  public async run(): Promise<void> {
    await Merchant.createMany([
      {
        name: 'Amazon',
        slug: 'amazon',
        description: 'Leading online retailer with a wide range of products.',
        logo_url: 'https://example.com/amazon-logo.png',
        website_url: 'https://www.amazon.com',
        meta_title: 'Amazon Deals and Promo Codes',
        meta_desc: 'Find the best Amazon promo codes and deals.',
      },
      {
        name: 'Walmart',
        slug: 'walmart',
        description: 'Retail giant offering everyday low prices.',
        logo_url: 'https://example.com/walmart-logo.png',
        website_url: 'https://www.walmart.com',
        meta_title: 'Walmart Discounts and Offers',
        meta_desc: 'Discover Walmart promo codes and special offers.',
      },
    ])
  }
}
