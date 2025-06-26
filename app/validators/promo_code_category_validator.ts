import vine from '@vinejs/vine'
import type { Database } from '@adonisjs/lucid/database'
import type PromoCodeCategory from '#models/promo_code_category'

/**
 * Validation rules for creating a promo code category
 */
// eslint-disable-next-line @typescript-eslint/typedef
export const createPromoCodeCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(255),
    slug: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(255)
      .regex(/^[a-z0-9-]+$/)
      .unique(async (db: Database, value: string): Promise<boolean> => {
        const category: PromoCodeCategory = await db.from('promo_code_categories').where('slug', value).first()
        return !category
      }),
  }),
)

/**
 * Validation rules for updating a promo code category
 */
// eslint-disable-next-line @typescript-eslint/typedef
export const updatePromoCodeCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(255).optional(),
    slug: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(255)
      .regex(/^[a-z0-9-]+$/)
      .optional(),
  }),
)
