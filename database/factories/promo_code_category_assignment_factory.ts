import factory from '@adonisjs/lucid/factories'
import PromoCodeCategoryAssignment from '#models/promo_code_category_assignment'
import { DateTime } from 'luxon'

export const PromoCodeCategoryAssignmentFactory = factory
  .define(PromoCodeCategoryAssignment, async () => {
    return {
      created_at: DateTime.now(),
      updated_at: null,
    }
  })
  .build()
