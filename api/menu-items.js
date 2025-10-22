import { withCors } from './_utils.js'
import menuItems from './data/menu-items.js'

// GET /api/menu-items
// Returns all diet-friendly meal options with nutritional information
export default withCors(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // In a production diet management app, this would:
  // 1. Fetch from a database with nutritional data
  // 2. Filter based on user's dietary preferences
  // 3. Include AI-powered meal recommendations
  // 4. Add calorie counts and macro breakdowns

  return res.status(200).json({
    success: true,
    data: menuItems,
    meta: {
      total: menuItems.length,
      context: 'diet-management',
      features: ['nutrition-tracking', 'ai-recommendations', 'meal-planning']
    }
  })
})