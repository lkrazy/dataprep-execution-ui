import { success } from '../utils/response'
import recipeService from '../services/recipe'

module.exports = (app) => {
  app.get('/api/recipe', (req, res) => {
    success(req, res, recipeService.getAll())
  })

  app.get('/api/recipe/:id', (req, res) => {
    const { id } = req.params
    success(req, res, recipeService.getById(id))
  })

  app.post('/api/recipe', (req, res) => {
    success(req, res, recipeService.addAll(req.body))
  })
}
