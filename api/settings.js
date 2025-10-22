import { withCors } from './_utils.js'

// GET /api/settings
// Returns DietManager app settings and configuration
export default withCors(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const settings = {
    appName: 'DietManager',
    version: '1.0.0',
    description: 'AI-powered diet management and meal planning',
    meta: {
      title: 'DietManager - AI Diet Tracking',
      shortTitle: 'DietManager',
      description: 'Track your nutrition, plan meals, and achieve your diet goals with AI-powered insights'
    },
    features: {
      aiNutritionAnalysis: true,
      mealPlanning: true,
      calorieTracking: true,
      macroBreakdown: true,
      dietaryRestrictions: true,
      mealPrep: true,
      shoppingList: true,
      nutritionGoals: true
    },
    ai: {
      enabled: true,
      models: ['nutrition-advisor', 'meal-planner', 'recipe-generator'],
      recommendations: true
    },
    limits: {
      minCaloriesPerDay: 1200,
      maxCaloriesPerDay: 4000,
      defaultCalorieGoal: 2000,
      mealPlanDays: 7
    },
    dietary: {
      preferences: ['standard', 'vegetarian', 'vegan', 'keto', 'paleo', 'mediterranean'],
      allergens: ['gluten', 'dairy', 'nuts', 'soy', 'eggs', 'shellfish'],
      restrictions: ['low-sodium', 'low-sugar', 'diabetic-friendly']
    },
    navigation: [
      { name: 'Dashboard', to: '/' },
      { name: 'Meals', to: '/menu-list-navigation' },
      { name: 'Meal Planner', to: '/menu-grid-navigation' },
      { name: 'Nutrition', to: '/about' },
      { name: 'Track', to: '/cart' },
      { name: 'Contact', to: '/contact' }
    ]
  }

  return res.status(200).json({
    success: true,
    data: settings
  })
})