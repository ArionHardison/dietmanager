export default [
  // Breakfast
  {
    id: 1,
    categoryId: 1,
    name: 'Protein Power Bowl',
    image: {
      title: 'Protein Power Bowl',
      url: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400'
    },
    description: 'Greek yogurt, berries, granola, almonds - 350 cal',
    price: 8,
    calories: 350,
    protein: 20,
    carbs: 45,
    fat: 12,
    options: [
      {
        id: 1,
        name: 'Yogurt Type',
        list: [
          {
            id: 1,
            name: 'Greek Yogurt',
            price: 0
          },
          {
            id: 2,
            name: 'Coconut Yogurt',
            price: 2
          }
        ]
      }
    ],
    additions: [
      {
        id: 1,
        name: 'Extra Protein Powder',
        price: 3,
        calories: 120
      },
      {
        id: 2,
        name: 'Chia Seeds',
        price: 2,
        calories: 60
      },
      {
        id: 3,
        name: 'Hemp Hearts',
        price: 2,
        calories: 70
      }
    ]
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Avocado Toast Deluxe',
    image: {
      title: 'Avocado Toast',
      url: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=400'
    },
    description: 'Whole grain bread, avocado, poached eggs, microgreens - 420 cal',
    price: 10,
    calories: 420,
    protein: 18,
    carbs: 38,
    fat: 22,
    options: [
      {
        id: 1,
        name: 'Bread Type',
        list: [
          {
            id: 1,
            name: 'Whole Wheat',
            price: 0
          },
          {
            id: 2,
            name: 'Gluten-Free',
            price: 2
          }
        ]
      }
    ],
    additions: [
      {
        id: 1,
        name: 'Extra Egg',
        price: 2,
        calories: 70
      },
      {
        id: 2,
        name: 'Smoked Salmon',
        price: 4,
        calories: 100
      }
    ]
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Overnight Oats',
    image: {
      title: 'Overnight Oats',
      url: 'https://images.unsplash.com/photo-1517673408680-ac1dccf2c4d5?w=400'
    },
    description: 'Rolled oats, almond milk, berries, honey - 380 cal',
    price: 7,
    calories: 380,
    protein: 12,
    carbs: 58,
    fat: 10,
    options: null,
    additions: [
      {
        id: 1,
        name: 'Protein Boost',
        price: 3,
        calories: 120
      },
      {
        id: 2,
        name: 'Almond Butter',
        price: 2,
        calories: 95
      }
    ]
  },
  // Lunch
  {
    id: 4,
    categoryId: 2,
    name: 'Quinoa Buddha Bowl',
    image: {
      title: 'Buddha Bowl',
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
    },
    description: 'Quinoa, roasted vegetables, chickpeas, tahini - 480 cal',
    price: 12,
    calories: 480,
    protein: 18,
    carbs: 62,
    fat: 20,
    options: [
      {
        id: 1,
        name: 'Protein',
        list: [
          {
            id: 1,
            name: 'Chickpeas',
            price: 0
          },
          {
            id: 2,
            name: 'Grilled Chicken',
            price: 4
          },
          {
            id: 3,
            name: 'Tofu',
            price: 3
          }
        ]
      }
    ],
    additions: [
      {
        id: 1,
        name: 'Extra Avocado',
        price: 3,
        calories: 120
      },
      {
        id: 2,
        name: 'Feta Cheese',
        price: 2,
        calories: 75
      }
    ]
  },
  {
    id: 5,
    categoryId: 2,
    name: 'Grilled Salmon Salad',
    image: {
      title: 'Salmon Salad',
      url: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=400'
    },
    description: 'Grilled salmon, mixed greens, quinoa, lemon vinaigrette - 520 cal',
    price: 14,
    calories: 520,
    protein: 35,
    carbs: 28,
    fat: 28,
    options: null,
    additions: [
      {
        id: 1,
        name: 'Extra Salmon',
        price: 5,
        calories: 180
      },
      {
        id: 2,
        name: 'Avocado',
        price: 3,
        calories: 120
      }
    ]
  },
  {
    id: 6,
    categoryId: 2,
    name: 'Mediterranean Wrap',
    image: {
      title: 'Mediterranean Wrap',
      url: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400'
    },
    description: 'Whole wheat wrap, hummus, grilled vegetables, feta - 440 cal',
    price: 10,
    calories: 440,
    protein: 16,
    carbs: 52,
    fat: 18,
    options: [
      {
        id: 1,
        name: 'Wrap Type',
        list: [
          {
            id: 1,
            name: 'Whole Wheat',
            price: 0
          },
          {
            id: 2,
            name: 'Gluten-Free',
            price: 2
          }
        ]
      }
    ],
    additions: null
  },
  // Dinner
  {
    id: 7,
    categoryId: 3,
    name: 'Grilled Chicken & Vegetables',
    image: {
      title: 'Grilled Chicken',
      url: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400'
    },
    description: 'Herb-marinated chicken breast, roasted vegetables, brown rice - 550 cal',
    price: 15,
    calories: 550,
    protein: 42,
    carbs: 45,
    fat: 18,
    options: [
      {
        id: 1,
        name: 'Side',
        list: [
          {
            id: 1,
            name: 'Brown Rice',
            price: 0
          },
          {
            id: 2,
            name: 'Quinoa',
            price: 2
          },
          {
            id: 3,
            name: 'Cauliflower Rice',
            price: 2
          }
        ]
      }
    ],
    additions: null
  },
  {
    id: 8,
    categoryId: 3,
    name: 'Zucchini Noodles Primavera',
    image: {
      title: 'Zucchini Noodles',
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400'
    },
    description: 'Spiralized zucchini, cherry tomatoes, basil, light pesto - 380 cal',
    price: 12,
    calories: 380,
    protein: 12,
    carbs: 28,
    fat: 24,
    options: [
      {
        id: 1,
        name: 'Add Protein',
        list: [
          {
            id: 1,
            name: 'None',
            price: 0
          },
          {
            id: 2,
            name: 'Grilled Chicken',
            price: 5
          },
          {
            id: 3,
            name: 'Shrimp',
            price: 6
          }
        ]
      }
    ],
    additions: null
  },
  {
    id: 9,
    categoryId: 3,
    name: 'Lean Beef Stir-Fry',
    image: {
      title: 'Beef Stir-Fry',
      url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400'
    },
    description: 'Lean beef strips, mixed vegetables, brown rice, ginger sauce - 580 cal',
    price: 16,
    calories: 580,
    protein: 38,
    carbs: 52,
    fat: 22,
    options: null,
    additions: null
  },
  // Snacks
  {
    id: 10,
    categoryId: 4,
    name: 'Protein Smoothie',
    image: {
      title: 'Protein Smoothie',
      url: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400'
    },
    description: 'Banana, protein powder, almond milk, spinach - 280 cal',
    price: 8,
    calories: 280,
    protein: 25,
    carbs: 32,
    fat: 6,
    options: [
      {
        id: 1,
        name: 'Protein Type',
        list: [
          {
            id: 1,
            name: 'Whey',
            price: 0
          },
          {
            id: 2,
            name: 'Plant-Based',
            price: 1
          }
        ]
      }
    ],
    additions: null
  },
  {
    id: 11,
    categoryId: 4,
    name: 'Energy Bites',
    image: {
      title: 'Energy Bites',
      url: 'https://images.unsplash.com/photo-1604909052868-27494d874a28?w=400'
    },
    description: 'Dates, nuts, coconut, cacao (4 pieces) - 220 cal',
    price: 6,
    calories: 220,
    protein: 6,
    carbs: 28,
    fat: 12,
    options: null,
    additions: null
  },
  {
    id: 12,
    categoryId: 4,
    name: 'Veggie & Hummus Plate',
    image: {
      title: 'Veggie Hummus',
      url: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=400'
    },
    description: 'Fresh vegetables with house-made hummus - 180 cal',
    price: 7,
    calories: 180,
    protein: 8,
    carbs: 22,
    fat: 9,
    options: null,
    additions: null
  },
  // Salads
  {
    id: 13,
    categoryId: 5,
    name: 'Kale Caesar Salad',
    image: {
      title: 'Kale Caesar',
      url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400'
    },
    description: 'Kale, parmesan, whole grain croutons, light caesar - 320 cal',
    price: 10,
    calories: 320,
    protein: 12,
    carbs: 28,
    fat: 18,
    options: null,
    additions: [
      {
        id: 1,
        name: 'Grilled Chicken',
        price: 5,
        calories: 165
      }
    ]
  },
  {
    id: 14,
    categoryId: 5,
    name: 'Asian Sesame Salad',
    image: {
      title: 'Asian Salad',
      url: 'https://images.unsplash.com/photo-1534157507362-b2447b0f46f5?w=400'
    },
    description: 'Mixed greens, edamame, mandarin, sesame ginger dressing - 290 cal',
    price: 11,
    calories: 290,
    protein: 10,
    carbs: 32,
    fat: 14,
    options: null,
    additions: [
      {
        id: 1,
        name: 'Tofu',
        price: 4,
        calories: 145
      }
    ]
  },
  {
    id: 15,
    categoryId: 5,
    name: 'Greek Salad Bowl',
    image: {
      title: 'Greek Salad',
      url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400'
    },
    description: 'Cucumber, tomato, olives, feta, olive oil lemon - 260 cal',
    price: 9,
    calories: 260,
    protein: 8,
    carbs: 18,
    fat: 18,
    options: null,
    additions: null
  },
  // Beverages
  {
    id: 16,
    categoryId: 6,
    name: 'Green Detox Juice',
    image: {
      title: 'Green Juice',
      url: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400'
    },
    description: 'Kale, apple, lemon, ginger, celery - 120 cal',
    price: 7,
    calories: 120,
    protein: 2,
    carbs: 28,
    fat: 1,
    options: null,
    additions: null
  },
  {
    id: 17,
    categoryId: 6,
    name: 'Coconut Water',
    image: {
      title: 'Coconut Water',
      url: 'https://images.unsplash.com/photo-1609893440053-8dda64d6c4a6?w=400'
    },
    description: 'Pure coconut water with electrolytes - 45 cal',
    price: 5,
    calories: 45,
    protein: 1,
    carbs: 11,
    fat: 0,
    options: null,
    additions: null
  },
  {
    id: 18,
    categoryId: 6,
    name: 'Matcha Latte',
    image: {
      title: 'Matcha Latte',
      url: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400'
    },
    description: 'Organic matcha, oat milk, natural sweetener - 130 cal',
    price: 6,
    calories: 130,
    protein: 3,
    carbs: 18,
    fat: 5,
    options: [
      {
        id: 1,
        name: 'Milk Type',
        list: [
          {
            id: 1,
            name: 'Oat Milk',
            price: 0
          },
          {
            id: 2,
            name: 'Almond Milk',
            price: 0
          },
          {
            id: 3,
            name: 'Coconut Milk',
            price: 1
          }
        ]
      }
    ],
    additions: null
  }
]