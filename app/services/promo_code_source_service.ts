import logger from '@adonisjs/core/services/logger'
import PromoCodeSource from '#models/promo_code_source'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'

/**
 * Service for managing promo code sources
 * @class PromoCodeSourceService
 */
export default class PromoCodeSourceService {
  /**
   * Create a new promo code source
   * @param {string} source_name - The name of the promo code source
   * @param {string} source_url - The URL of the promo code source
   * @param {number} promo_code_id - The ID of the associated promo code
   * @returns {Promise<PromoCodeSource>} - A promise that resolves with the created promo code source
   */
  public static async createPromoCodeSource(
    source_name: string,
    source_url: string,
    promo_code_id: number,
  ): Promise<PromoCodeSource> {
    try {
      const alreadyExists: boolean = await this.checkPromoCodeSourceExists(source_name, source_url, promo_code_id)

      if (!alreadyExists) {
        return await PromoCodeSource.create({
          source_name,
          source_url,
          promo_code_id,
        })
      }

      return this.getPromoCodeSourceByNameAndUrlAndPromoCodeId({ source_name, source_url, promo_code_id })
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Check if a promo code source exists by source_name and source_url
   * @param {string} source_name - The name of the promo code source
   * @param {string} source_url - The URL of the promo code source
   * @param {number} promo_code_id - The ID of the associated promo code
   * @returns {Promise<boolean>} - A promise that resolves with true if the source exists, false otherwise
   */
  public static async checkPromoCodeSourceExists(
    source_name: string,
    source_url: string,
    promo_code_id: number,
  ): Promise<boolean> {
    try {
      const existingSource: PromoCodeSource | null = await PromoCodeSource.query()
        .where('source_name', source_name)
        .andWhere('source_url', source_url)
        .andWhere('promo_code_id', promo_code_id)
        .first()
      return !!existingSource
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Get a promo code source with optional filters
   * @param {object} filters - Filters for querying promo code sources
   * @param {string} [filters.source_name] - Filter by source name
   * @param {string} [filters.source_url] - Filter by source URL
   * @param {number} [filters.promo_code_id] - Filter by promo code ID
   * @returns {Promise<PromoCodeSource>} - A promise that resolves with the promo code source
   */
  public static async getPromoCodeSourceByNameAndUrlAndPromoCodeId(filters: {
    source_name?: string
    source_url?: string
    promo_code_id?: number
  }): Promise<PromoCodeSource> {
    try {
      let query: ModelQueryBuilderContract<typeof PromoCodeSource> = PromoCodeSource.query()

      if (filters.source_name) {
        query = query.where('source_name', filters.source_name)
      }

      if (filters.source_url) {
        query = query.where('source_url', filters.source_url)
      }

      if (filters.promo_code_id) {
        query = query.where('promo_code_id', filters.promo_code_id)
      }

      const promoCodeSource: PromoCodeSource | null = await query.first()
      if (!promoCodeSource) {
        throw new Error('Promo code source not found')
      }
      return promoCodeSource
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }
}
