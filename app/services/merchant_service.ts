import logger from '@adonisjs/core/services/logger'
import type { CreateMerchantPayload, UpdateMerchantPayload } from '#interfaces/merchant_interface'
import Merchant from '#models/merchant'

/**
 * Service to handle merchant operations
 * @class MerchantService
 */
export default class MerchantService {
  /**
   * Create a new merchant
   * @param {CreateMerchantPayload} payload - Data to create the merchant
   * @returns {Promise<Merchant>} - A promise that resolves with the created merchant
   */
  public static async createMerchant(payload: CreateMerchantPayload): Promise<Merchant> {
    try {
      const existingMerchant: Merchant | null = await this.findMerchantBySlug(payload.slug)
      if (existingMerchant) {
        throw new Error('Merchant with this slug already exists')
      }
      return Merchant.create(payload)
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Get all merchants
   * @returns {Promise<Merchant[]>} - A promise that resolves with an array of merchants
   */
  public static async getMerchants(): Promise<Merchant[]> {
    try {
      return await Merchant.all()
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Get a merchant by ID
   * @param {number} id - The merchant ID
   * @returns {Promise<Merchant>} - A promise that resolves with the merchant
   */
  public static async getMerchantById(id: number): Promise<Merchant> {
    try {
      return await Merchant.findOrFail(id)
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Update a merchant
   * @param {number} id - The merchant ID
   * @param {UpdateMerchantPayload} payload - The data to update the merchant
   * @returns {Promise<Merchant>} - A promise that resolves with the updated merchant
   */
  public static async updateMerchant(id: number, payload: UpdateMerchantPayload): Promise<Merchant> {
    try {
      const merchant: Merchant = await MerchantService.getMerchantById(id)
      if (payload.slug && payload.slug !== merchant.slug) {
        const existingMerchant: Merchant | null = await this.findMerchantBySlug(payload.slug)
        if (existingMerchant) {
          throw new Error('Merchant with this slug already exists')
        }
      }
      await merchant.merge(payload).save()
      await merchant.refresh()
      return merchant
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }

  /**
   * Find a merchant by slug
   * @param {string} slug - The merchant slug
   * @returns {Promise<Merchant | null>} - A promise that resolves with the merchant or null if not found
   * @throws {Error} - If an error occurs during the database query
   */
  public static async findMerchantBySlug(slug: string): Promise<Merchant | null> {
    try {
      return await Merchant.query().where('slug', slug).first()
    } catch (error: any) {
      logger.error(error)
      throw error
    }
  }
}
