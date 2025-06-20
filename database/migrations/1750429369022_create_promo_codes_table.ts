import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'promo_codes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('code', 100).notNullable()
      table.text('description').nullable()
      table.integer('merchant_id').notNullable().unsigned().references('id').inTable('merchants').onDelete('CASCADE')
      table.timestamp('starts_at').nullable()
      table.timestamp('expires_at').nullable()
      table.integer('usage_count').notNullable().defaultTo(0)
      table.boolean('is_verified').notNullable().defaultTo(false)
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
