import { withCors } from './_utils.js'

// Import diet categories data
import categories from './data/menu-categories.js'

// GET /api/menu-categories
// Returns meal categories for diet planning (breakfast, lunch, dinner, snacks)
export default withCors(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // In a production diet app, categories would include:
  // - Breakfast, Lunch, Dinner, Snacks
  // - Dietary types: Keto, Vegan, Paleo, Low-carb
  // - Meal prep categories
  // - Quick meals vs. recipes

  return res.status(200).json({
    success: true,
    data: categories,
    meta: {
      total: categories.length,
      types: ['meals', 'dietary-preferences', 'nutrition-goals']
    }
  })
})