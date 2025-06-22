import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'promo_code_sources'

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
      table.text('source_url').notNullable()
      table.timestamp('discovered_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
