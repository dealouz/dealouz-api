import vine from '@vinejs/vine'

/**
 * Validation rules for creating a merchant
 */
// eslint-disable-next-line @typescript-eslint/typedef
export const createMerchantValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(255),
    slug: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(255)
      .regex(/^[a-z0-9-]+$/),
    description: vine.string().trim().optional(),
    logo_url: vine.string().url().optional(),
    website_url: vine.string().url().optional(),
    meta_title: vine.string().trim().maxLength(255).optional(),
    meta_desc: vine.string().trim().maxLength(255).optional(),
  }),
)

/**
 * Validation rules for updating a merchant
 */
// eslint-disable-next-line @typescript-eslint/typedef
export const updateMerchantValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(255).optional(),
    slug: vine
      .string()
      .trim()
      .minLength(3)
      .maxLength(255)
      .regex(/^[a-z0-9-]+$/)
      .optional(),
    description: vine.string().trim().optional(),
    logo_url: vine.string().url().optional(),
    website_url: vine.string().url().optional(),
    meta_title: vine.string().trim().maxLength(255).optional(),
    meta_desc: vine.string().trim().maxLength(255).optional(),
  }),
)
