import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { DateTime } from 'luxon'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      role_id: faker.number.int({ min: 1, max: 2 }), // Assurez-vous d'avoir des IDs valides dans la table user_roles
      lastname: faker.person.lastName(),
      firstname: faker.person.firstName(),
      email: faker.internet.email(),
      password: 'Toto35!!!', // Mot de passe par défaut hashé
      is_active: faker.datatype.boolean(),
      active_code: faker.number.int({ min: 100000, max: 999999 }), // Code numérique à 6 chiffres
      created_at: DateTime.fromJSDate(faker.date.recent()),
      updated_at: DateTime.fromJSDate(faker.date.recent()),
    }
  })
  .build()
