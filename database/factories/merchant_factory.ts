import factory from '@adonisjs/lucid/factories'
import Merchant from '#models/merchant'

export const MerchantFactory = factory
  .define(Merchant, async ({ faker }) => {
    return {
      name: faker.company.name(),
      slug: faker.helpers.slugify(faker.company.name()).toLowerCase(),
      description: faker.lorem.paragraph(),
      logo_url: faker.image.url(),
      website_url: faker.internet.url(),
      meta_title: faker.lorem.sentence({ min: 3, max: 7 }),
      meta_desc: faker.lorem.sentence({ min: 5, max: 10 }),
    }
  })
  .build()
