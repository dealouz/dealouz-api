/**
 * CreatePromoCodeCategoryPayload
 * @property {string} name - The name of the category
 * @property {string} slug - The slug for the category's URL
 */
export interface CreatePromoCodeCategoryPayload {
  name: string
  slug: string
}

/**
 * UpdatePromoCodeCategoryPayload
 * @property {string} [name] - The name of the category
 * @property {string} [slug] - The slug for the category's URL
 */
export interface UpdatePromoCodeCategoryPayload {
  name?: string
  slug?: string
}

/**
 * CreatePromoCodeCategoryResponse
 * @property {string} message - The response message
 * @property {number} category_id - The ID of the created category
 */
export interface CreatePromoCodeCategoryResponse {
  message: string
  category_id: number
}
