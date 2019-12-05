import db from '../db'

const getRecipes = () => db.get('recipes')

export default {
  getAll() {
    return getRecipes().filter(() => true).value()
  },
  getById(id) {
    return getRecipes().find({ id }).value()
  },
  addAll(recipes) {
    recipes.forEach((recipe) => {
      if (!getRecipes().some({ id: recipe.id }).value()) {
        console.log(`add recipe ${recipe.recipe}`)
        getRecipes().push(recipe).write()
      }
    })
  }
}
