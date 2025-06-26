/**
 * CreateMerchantPayload
 * @property {string} name - The name of the merchant
 * @property {string} slug - The slug for the merchant's URL
 * @property {string} [description] - The description of the merchant
 * @property {string} [logo_url] - The URL of the merchant's logo
 * @property {string} [website_url] - The official website URL of the merchant
 * @property {string} [meta_title] - The SEO meta title for the merchant
 * @property {string} [meta_desc] - The SEO meta description for the merchant
 */
export interface CreateMerchantPayload {
  name: string
  slug: string
  description?: string
  logo_url?: string
  website_url?: string
  meta_title?: string
  meta_desc?: string
}

/**
 * UpdateMerchantPayload
 * @property {string} [name] - The name of the merchant
 * @property {string} [slug] - The slug for the merchant's URL
 * @property {string} [description] - The description of the merchant
 * @property {string} [logo_url] - The URL of the merchant's logo
 * @property {string} [website_url] - The official website URL of the merchant
 * @property {string} [meta_title] - The SEO meta title for the merchant
 * @property {string} [meta_desc] - The SEO meta description for the merchant
 */
export interface UpdateMerchantPayload {
  name?: string
  slug?: string
  description?: string
  logo_url?: string
  website_url?: string
  meta_title?: string
  meta_desc?: string
}

/**
 * CreateMerchantResponse
 * @property {string} message - The response message
 * @property {number} merchant_id - The ID of the created merchant
 */
export interface CreateMerchantResponse {
  message: string
  merchant_id: number
}
