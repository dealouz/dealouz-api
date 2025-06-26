import vine from '@vinejs/vine'
import type { Database } from '@adonisjs/lucid/database'
import type Merchant from '#models/merchant'
import type PromoCodeCategory from '#models/promo_code_category'
import type PromoCode from '#models/promo_code'
import type PromoCodeSource from '#models/promo_code_source'

/**
 * Validation rules for creating a promo code
 */
// eslint-disable-next-line @typescript-eslint/typedef
export const createPromoCodeValidator = vine.compile(
  vine.object({
    code: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(100)
      .unique(async (db: Database, value: string) => {
        const promoCode: PromoCode = await db.from('promo_codes').where('code', value).first()
        return !promoCode
      }),
    description: vine.string().trim().optional(),
    merchant_id: vine.number().exists(async (db: Database, value: number) => {
      const merchant: Merchant | null = await db.from('merchants').where('id', value).first()
      return !!merchant
    }),
    category_ids: vine
      .array(
        vine.number().exists(async (db: Database, value: number) => {
          const category: PromoCodeCategory | null = await db.from('promo_code_categories').where('id', value).first()
          return !!category
        }),
      )
      .optional(),
    source_url: vine.string().trim().optional(),
    source_name: vine.string().trim().optional(),
    starts_at: vine.date().optional(),
    expires_at: vine.date().optional(),
    usage_count: vine.number().min(0).optional(),
    is_verified: vine.boolean().optional(),
  }),
)

/**
 * Validation rules for updating a promo code
 */
// eslint-disable-next-line @typescript-eslint/typedef
export const updatePromoCodeValidator = vine.compile(
  vine.object({
    code: vine.string().trim().minLength(3).maxLength(100).optional(),
    description: vine.string().trim().optional(),
    merchant_id: vine
      .number()
      .exists(async (db: Database, value: number) => {
        const merchant: Merchant | null = await db.from('merchants').where('id', value).first()
        return !!merchant
      })
      .optional(),
    category_ids: vine
      .array(
        vine.number().exists(async (db: Database, value: number) => {
          const category: PromoCodeCategory | null = await db.from('promo_code_categories').where('id', value).first()
          return !!category
        }),
      )
      .optional(),
    source_url: vine.string().trim().optional(),
    source_name: vine.string().trim().optional(),
    starts_at: vine.date().optional(),
    expires_at: vine.date().optional(),
    usage_count: vine.number().min(0).optional(),
    is_verified: vine.boolean().optional(),
  }),
)

/**
 * Validation rules for filtering promo codes
 */
// eslint-disable-next-line @typescript-eslint/typedef
export const filterPromoCodeValidator = vine.compile(
  vine.object({
    created_at: vine.date().optional(),
    merchant_id: vine
      .number()
      .exists(async (db: Database, value: number) => {
        const merchant: Merchant | null = await db.from('merchants').where('id', value).first()
        return !!merchant
      })
      .optional(),
    category_ids: vine
      .array(
        vine.number().exists(async (db: Database, value: number) => {
          const category: PromoCodeCategory | null = await db.from('promo_code_categories').where('id', value).first()
          return !!category
        }),
      )
      .optional(),
    source_name: vine
      .string()
      .trim()
      .exists(async (db: Database, value: string) => {
        const source: PromoCodeSource | null = await db.from('promo_code_sources').where('source_name', value).first()
        return !!source
      })
      .optional(),
  }),
)
