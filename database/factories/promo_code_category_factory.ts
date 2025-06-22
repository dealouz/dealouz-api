import factory from '@adonisjs/lucid/factories'
import PromoCodeCategory from '#models/promo_code_category'

export const PromoCodeCategoryFactory = factory
  .define(PromoCodeCategory, async ({ faker }) => {
    const name = faker.commerce.department()
    return {
      name,
      slug: faker.helpers.slugify(name).toLowerCase(),
    }
  })
  .build()
