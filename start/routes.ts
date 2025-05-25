import router from '@adonisjs/core/services/router'

/**
 * Import des routes
 */
import './routes/swagger.js'
import './routes/health.js'

/**
 * Cette route est utilisée pour tester le fonctionnement de base de l'application.
 */
router.get('/', async (): Promise<{ hello: string }> => {
  return {
    hello: 'world',
  }
})
