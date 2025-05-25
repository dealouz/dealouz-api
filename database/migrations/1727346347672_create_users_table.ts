import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName: string = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('lastname').nullable()
      table.string('firstname').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.boolean('is_active').defaultTo(false)
      table.integer('active_code', 6).notNullable()
      table.integer('role_id').notNullable().unsigned().references('id').inTable('user_roles').onDelete('CASCADE')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
