import factory from '@adonisjs/lucid/factories'
import PromoCodeSource from '#models/promo_code_source'
import { DateTime } from 'luxon'

export const PromoCodeSourceFactory = factory
  .define(PromoCodeSource, async ({ faker }) => {
    return {
      source_url: faker.internet.url(),
      source_name: faker.company.name(),
      discovered_at: DateTime.fromJSDate(faker.date.past()),
    }
  })
  .build()
