# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DietManager is a **Full-stack AI Diet Management Utility** built as a monorepo containing:
- **dietmanager-client**: Nuxt.js (Vue 2) frontend with SSR capabilities for diet tracking and meal planning
- **api/**: Vercel serverless functions for all backend functionality

The application provides intelligent diet tracking, AI-powered meal planning, nutrition analysis, and personalized dietary recommendations.

---

## Technology Stack

### Frontend (dietmanager-client)
- **Framework**: Nuxt.js 2.14.1 (Vue 2.6.11)
- **Build System**: Nuxt with Webpack
- **State Management**: Vuex with localStorage persistence
- **Styling**: SCSS with Bootstrap Vue 2.16.0
- **UI Components**: Bootstrap Vue, Font Awesome, Themify Icons
- **HTTP Client**: Axios with Nuxt Axios module
- **Key Features**:
  - AI nutrition analysis integration
  - Meal planning and tracking
  - Calorie and macro counting
  - Shopping list generation
  - Diet goal management

### Backend Architecture
- **Platform**: Vercel Serverless Functions
- **Runtime**: Node.js 14.x+
- **Location**: `/api` directory
- **Data Storage**: Currently JSON files in `/api/data` (to be replaced with database)
- **Key Endpoints**:
  - `/api/menu-items` - Diet-friendly meal options
  - `/api/menu-categories` - Meal categories (breakfast, lunch, dinner, snacks)
  - `/api/ai-nutrition` - AI-powered nutrition analysis
  - `/api/settings` - App configuration

### Deployment
- **Platform**: Vercel (optimized for serverless)
- **Configuration**: vercel.json with monorepo setup
- **Environments**: Development (local with `vercel dev`) and Production (Vercel)

---

## Project Structure

```
dietmanager/
├── CLAUDE.md (this file)
├── README.md (project documentation)
├── package.json (monorepo root)
├── vercel.json (Vercel deployment config)
├── .env.example (environment template)
├── api/ (Vercel serverless functions)
│   ├── data/ (JSON data files - temporary)
│   │   ├── menu-items.js
│   │   ├── menu-categories.js
│   │   └── ... (other data files)
│   ├── _utils.js (shared utilities)
│   ├── menu-items.js (meal data endpoint)
│   ├── menu-categories.js (categories endpoint)
│   ├── ai-nutrition.js (AI analysis endpoint)
│   └── settings.js (app config endpoint)
├── dietmanager-client/ (frontend)
│   ├── pages/ (Nuxt page components)
│   ├── components/ (Vue components)
│   ├── layouts/ (page layouts)
│   ├── store/ (Vuex modules)
│   ├── plugins/ (Vue plugins)
│   ├── assets/ (SCSS & static assets)
│   ├── nuxt.config.js (Nuxt config)
│   └── package.json
└── documentation/ (docs & resources)
```

---

## Key DietManager Features

### AI-Powered Capabilities
- **Nutrition Analysis**: Analyze meals for calories, macros, and micronutrients
- **Meal Plan Generation**: Create personalized meal plans based on dietary goals
- **Dietary Advice**: Get AI-powered recommendations for nutrition goals
- **Recipe Suggestions**: Generate recipes based on preferences and restrictions

### Core Functionality
- **Calorie Tracking**: Track daily caloric intake with smart recommendations
- **Macro Management**: Monitor protein, carbs, and fat distribution
- **Meal Planning**: Plan weekly meals with shopping list generation
- **Dietary Restrictions**: Support for various diets (keto, vegan, paleo, etc.)
- **Nutrition Goals**: Set and track personalized nutrition objectives
- **Progress Analytics**: Visualize dietary trends and achievements

---

## Development Commands

### Quick Start
```bash
# Install all dependencies
npm install
cd dietmanager-client && npm install

# Development mode (runs both client and serverless API)
npm run dev

# Or run client only (port 3000)
npm run dev:client
```

### Production Build
```bash
# Build client for production
cd dietmanager-client && npm run build

# Deploy to Vercel
vercel --prod
```

### Testing Serverless Functions Locally
```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Run local development environment with serverless functions
vercel dev
# This starts both the Nuxt frontend and serverless API endpoints
```

---

## API Endpoints

All API endpoints are implemented as serverless functions in the `/api` directory:

- `GET /api/menu-items` - Retrieve diet-friendly meal options
- `GET /api/menu-categories` - Get meal categories
- `GET /api/settings` - App configuration and features
- `GET /api/ai-nutrition` - AI service status
- `POST /api/ai-nutrition` - Analyze meals, generate plans, get advice
  - Actions: `analyze-meal`, `generate-meal-plan`, `dietary-advice`

### Local Development
During development with `vercel dev`, the API runs on the same port as the frontend (usually 3000), making it easy to test full-stack functionality.

---

## Environment Configuration

### Required Environment Variables
```bash
# API Configuration (for local development)
API_URL=http://localhost:3000/api

# AI Features
AI_ENABLED=true
AI_NUTRITION_ENABLED=true

# Application
APP_NAME=DietManager
DEMO_MODE=true
```

### Setting Up Environment
1. Copy `.env.example` to `.env`
2. Update values for your environment
3. Environment variables are automatically loaded by Vercel

---

## Vercel Deployment

### Deployment Steps
1. Install Vercel CLI: `npm install -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy: `vercel --prod`

### Configuration Highlights
- **Serverless Functions**: All `/api` routes run as serverless functions
- **Static Assets**: Frontend built and served optimally
- **Environment Variables**: Set in Vercel dashboard or via CLI
- **Automatic HTTPS**: SSL certificates provided automatically
- **CORS**: Configured for API endpoints

---

## State Management (Vuex)

### Store Modules
- **cart** → Renamed conceptually to **meal-tracker** (tracks selected meals)
- **menu** → Manages meal items, categories, and dietary options
- **settings** → App configuration and user preferences
- **theme** → UI customization
- **shell** → UI state management

### Key Patterns
- Server-side initialization via `nuxtServerInit()`
- LocalStorage persistence for user data
- Modular architecture for scalability

---

## Component Architecture

### Naming Convention
Components use "S" prefix (legacy from "Soup" template):
- Consider renaming to "DM" prefix: `DMHeader`, `DMMealItem`, `DMNutritionPanel`
- Located in `components/` organized by feature

### Key Components to Adapt
- Cart components → Meal tracking components
- Menu components → Diet/meal selection components
- Checkout → Meal plan confirmation/saving

---

## Important Notes

### Simplified Architecture
- **Single API Implementation**: All backend logic is now in `/api` as serverless functions
- **No Duplicate Code**: Removed redundant Express server
- **Unified Development**: Use `vercel dev` for both frontend and backend

### Performance Optimization
- Lazy-loaded components for better initial load
- SSR for SEO and fast first paint
- Serverless functions for scalable API
- Edge network deployment via Vercel

### Development Priorities
1. Implement real database (PostgreSQL/Supabase recommended)
2. Add authentication system
3. Integrate real nutrition APIs (Nutritionix, Edamam)
4. Implement AI features with OpenAI/Anthropic
5. Add comprehensive testing suite
6. Complete component renaming from S-prefix to DM-prefix

### Deployment Checklist
- [ ] Update all environment variables in Vercel
- [ ] Configure domain settings
- [ ] Set up monitoring (Sentry, analytics)
- [ ] Enable production AI features
- [ ] Configure rate limiting
- [ ] Set up backup and recovery

---

## Common Tasks

### Adding New API Endpoints
1. Create new file in `/api/` directory
2. Export default function with request/response handlers
3. Use `_utils.js` for shared functionality (CORS, auth, etc.)
4. Test locally with `vercel dev`

### Adding New Dietary Features
1. Create API endpoint in `/api/`
2. Add Vuex store module if needed
3. Create Vue components in `dietmanager-client/components/`
4. Update routes in `pages/`

### Integrating AI Features
1. Add endpoint in `/api/ai-nutrition.js`
2. Configure AI service credentials
3. Implement frontend components for AI interactions
4. Add loading states and error handling

### Working with Data
1. Current data is in `/api/data/` as JSON files
2. Each file exports JavaScript objects/arrays
3. Will be replaced with database integration
4. Include nutritional information for all food items

---

## Future Enhancements

### Planned Features
- User authentication and profiles
- Social features and community
- Barcode scanning for food items
- Integration with fitness trackers
- Premium subscription tier
- Mobile app development
- Advanced AI coaching

### Technical Improvements
- Migration to Vue 3/Nuxt 3
- TypeScript implementation
- GraphQL API layer
- Real-time updates with WebSockets
- Database integration (PostgreSQL/Supabase)
- CI/CD pipeline setup

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Nuxt 2 Docs**: https://nuxtjs.org
- **Vue 2 Docs**: https://v2.vuejs.org
- **Bootstrap Vue**: https://bootstrap-vue.org

For DietManager-specific features and AI integration, refer to the `/api` directory for implementation patterns and the environment configuration for feature flags.