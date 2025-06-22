import factory from '@adonisjs/lucid/factories'
import PromoCode from '#models/promo_code'
import { DateTime } from 'luxon'

export const PromoCodeFactory = factory
  .define(PromoCode, async ({ faker }) => {
    return {
      code: faker.string.alphanumeric({ length: 10, casing: 'upper' }),
      description: faker.lorem.sentence(),
      starts_at: DateTime.fromJSDate(faker.date.past()),
      expires_at: DateTime.fromJSDate(faker.date.future()),
      usage_count: faker.number.int({ min: 0, max: 1000 }),
      is_verified: faker.datatype.boolean(),
    }
  })
  .build()
