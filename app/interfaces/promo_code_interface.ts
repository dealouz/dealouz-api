/**
 * CreatePromoCodePayload
 * @property {string} code - The promo code string
 * @property {string} [description] - The description of the promo code
 * @property {number} merchant_id - The ID of the associated merchant
 * @property {number[]} [category_ids] - The IDs of the associated categories
 * @property {string} [source_url] - The URL where the promo code was sourced from
 * @property {string} [source_name] - The name of the source where the promo code was found
 * @property {Date} [starts_at] - The start date of the promo code's validity
 * @property {Date} [expires_at] - The expiration date of the promo code
 * @property {number} [usage_count] - The number of times the promo code has been used
 * @property {boolean} [is_verified] - Whether the promo code is verified
 */
export interface CreatePromoCodePayload {
  code: string
  description?: string
  merchant_id: number
  category_ids?: number[]
  source_url?: string
  source_name?: string
  starts_at?: Date
  expires_at?: Date
  usage_count?: number
  is_verified?: boolean
}

/**
 * UpdatePromoCodePayload
 * @property {string} [code] - The promo code string
 * @property {string} [description] - The description of the promo code
 * @property {number} [merchant_id] - The ID of the associated merchant
 * @property {number[]} [category_ids] - The IDs of the associated categories
 * @property {string} [source_url] - The URL where the promo code was sourced from
 * @property {string} [source_name] - The name of the source where the promo code was found
 * @property {Date} [starts_at] - The start date of the promo code's validity
 * @property {Date} [expires_at] - The expiration date of the promo code
 * @property {number} [usage_count] - The number of times the promo code has been used
 * @property {boolean} [is_verified] - Whether the promo code is verified
 */
export interface UpdatePromoCodePayload {
  code?: string
  description?: string
  merchant_id?: number
  category_ids?: number[]
  source_url?: string
  source_name?: string
  starts_at?: Date
  expires_at?: Date
  usage_count?: number
  is_verified?: boolean
}

/**
 * CreatePromoCodeResponse
 * @property {string} message - The response message
 * @property {number} promo_code_id - The ID of the created promo code
 */
export interface CreatePromoCodeResponse {
  message: string
  promo_code_id: number
}
