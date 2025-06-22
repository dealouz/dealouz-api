import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { PromoCodeCategoryAssignmentFactory } from '#database/factories/promo_code_category_assignment_factory'
import PromoCode from '#models/promo_code'
import PromoCodeCategory from '#models/promo_code_category'

/**
 * Seeder to populate the promo_code_category_assignments table with dummy data
 * @class PromoCodeCategoryAssignmentSeeder
 */
export default class extends BaseSeeder {
  /**
   * Run the seeder
   * @returns {Promise<void>} - A promise that resolves with no return value
   */
  public async run(): Promise<void> {
    const promoCodeIds: number[] = (await PromoCode.all()).map((promoCode: PromoCode) => promoCode.id)
    const categoryIds: number[] = (await PromoCodeCategory.all()).map((category: PromoCodeCategory) => category.id)

    if (promoCodeIds.length === 0 || categoryIds.length === 0) {
      console.log('No promo codes or categories found, PromoCodeCategoryAssignmentSeeder cannot assign IDs.')
      return
    }

    // Create 15 assignment records, each promo code can have 1-3 categories
    for (const promoCodeId of promoCodeIds) {
      const numCategories = Math.floor(Math.random() * 3) + 1 // 1 to 3 categories per promo code
      const selectedCategoryIds = categoryIds.sort(() => Math.random() - 0.5).slice(0, numCategories)

      for (const categoryId of selectedCategoryIds) {
        await PromoCodeCategoryAssignmentFactory.merge({
          promo_code_id: promoCodeId,
          promo_code_category_id: categoryId,
        }).create()
      }
    }
  }
}
