import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'promo_code_category_assignments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table
        .integer('promo_code_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('promo_codes')
        .onDelete('CASCADE')
      table
        .integer('promo_code_category_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('promo_code_categories')
        .onDelete('CASCADE')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
