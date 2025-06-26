import logger from '@adonisjs/core/services/logger'
import type { CreatePromoCodePayload, UpdatePromoCodePayload } from '#interfaces/promo_code_interface'
import PromoCode from '#models/promo_code'
import { DateTime } from 'luxon'
import PromoCodeSourceService from '#services/promo_code_source_service'

/**
 * Service to handle promo code operations
 * @class PromoCodeService
 */
export default class PromoCodeService {
  /**
   * Create a new promo code
   * @param {CreatePromoCodePayload} payload - Data to create the promo code
   * @returns {Promise<PromoCode>} - A promise that resolves with the created promo code
   */
  public static async createPromoCode(payload: CreatePromoCodePayload): Promise<PromoCode> {
    try {
      const existingPromoCode: boolean = await this.checkPromoCodeExists(payload.code)
      if (existingPromoCode) {
        throw new Error('Promo code already exists')
      }
      const promoCode: PromoCode = await PromoCode.create({
        code: payload.code,
        description: payload.description,
        merchant_id: payload.merchant_id,
        starts_at: payload.starts_at ? DateTime.fromJSDate(payload.starts_at) : null,
        expires_at: payload.expires_at ? DateTime.fromJSDate(payload.expires_at) : null,
        usage_count: payload.usage_count || 0,
        is_verified: payload.is_verified || false,
      })
      if (payload.category_ids && payload.category_ids.length > 0) {
        await promoCode.related('categories').attach(payload.category_ids)
      }

      if (payload.source_url && payload.source_name) {
        await PromoCodeSourceService.createPromoCodeSource(payload.source_name, payload.source_url, promoCode.id)
      }

      await promoCode.load('merchant')
      await promoCode.load('categories')
      await promoCode.load('sources')
      return promoCode
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Get all promo codes with optional filters
   * @param {object} filters - Filters for querying promo codes
   * @param {Date} [filters.created_at] - Filter by creation date
   * @param {number} [filters.merchant_id] - Filter by merchant ID
   * @param {number[]} [filters.category_ids] - Filter by category IDs
   * @returns {Promise<PromoCode[]>} - A promise that resolves with an array of promo codes
   */
  public static async getPromoCodes(filters: {
    created_at?: Date
    merchant_id?: number
    category_ids?: number[]
  }): Promise<PromoCode[]> {
    try {
      let query = PromoCode.query().preload('merchant').preload('categories').preload('source')

      if (filters.created_at) {
        const startOfDay = DateTime.fromJSDate(filters.created_at).startOf('day')
        const endOfDay = DateTime.fromJSDate(filters.created_at).endOf('day')
        query = query.whereBetween('created_at', [startOfDay, endOfDay])
      }
      if (filters.merchant_id) {
        query = query.where('merchant_id', filters.merchant_id)
      }
      if (filters.category_ids && filters.category_ids.length > 0) {
        query = query.whereHas('categories', (categoryQuery) => {
          categoryQuery.whereIn('promo_code_categories.id', filters.category_ids)
        })
      }
      return await query
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Get a promo code by ID
   * @param {number} id - The promo code ID
   * @returns {Promise<PromoCode>} - A promise that resolves with the promo code
   */
  public static async getPromoCodeById(id: number): Promise<PromoCode> {
    try {
      return await PromoCode.query()
        .where('id', id)
        .preload('merchant')
        .preload('categories')
        .preload('source')
        .firstOrFail()
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Check if a promo code exists by code
   * @param {string} code - The promo code string
   * @returns {Promise<boolean>} - A promise that resolves with true if the promo code exists
   */
  public static async checkPromoCodeExists(code: string): Promise<boolean> {
    try {
      const promoCode: PromoCode | null = await PromoCode.findBy('code', code)
      return !!promoCode
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Update a promo code
   * @param {number} id - The promo code ID
   * @param {UpdatePromoCodePayload} payload - The data to update the promo code
   * @returns {Promise<PromoCode>} - A promise that resolves with the updated promo code
   */
  public static async updatePromoCode(id: number, payload: UpdatePromoCodePayload): Promise<PromoCode> {
    try {
      const promoCode = await PromoCodeService.getPromoCodeById(id)
      if (payload.code && payload.code !== promoCode.code) {
        const existingPromoCode = await PromoCode.findBy('code', payload.code)
        if (existingPromoCode) {
          throw new Error('Promo code already exists')
        }
      }
      await promoCode
        .merge({
          code: payload.code,
          description: payload.description,
          merchant_id: payload.merchant_id,
          starts_at: payload.starts_at ? DateTime.fromJSDate(payload.starts_at) : null,
          expires_at: payload.expires_at ? DateTime.fromJSDate(payload.expires_at) : null,
          usage_count: payload.usage_count,
          is_verified: payload.is_verified,
        })
        .save()
      if (payload.category_ids) {
        await promoCode.related('categories').sync(payload.category_ids)
      }
      await promoCode.load('merchant')
      await promoCode.load('categories')
      await promoCode.load('source')
      return promoCode
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }
}
