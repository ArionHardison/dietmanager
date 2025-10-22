#!/usr/bin/env node
/**
 * Local Development Server for Serverless Functions
 * Runs the API endpoints locally without requiring Vercel CLI
 */

import express from 'express';
import cors from 'cors';
import { createRequire } from 'module';

// Import serverless functions
import menuItemsHandler from './api/menu-items.js';
import menuCategoriesHandler from './api/menu-categories.js';
import settingsHandler from './api/settings.js';
import aiNutritionHandler from './api/ai-nutrition.js';

const app = express();
const PORT = process.env.API_PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to convert serverless handlers to Express middleware
const serverlessToExpress = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('Handler error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

// Routes - map to serverless functions
app.get('/menu-items', serverlessToExpress(menuItemsHandler));
app.get('/menu-categories', serverlessToExpress(menuCategoriesHandler));
app.get('/settings', serverlessToExpress(settingsHandler));
app.get('/ai-nutrition', serverlessToExpress(aiNutritionHandler));
app.post('/ai-nutrition', serverlessToExpress(aiNutritionHandler));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'DietManager API', timestamp: new Date().toISOString() });
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 DietManager API Server running on http://localhost:${PORT}`);
  console.log(`   - GET  /menu-items`);
  console.log(`   - GET  /menu-categories`);
  console.log(`   - GET  /settings`);
  console.log(`   - GET  /ai-nutrition`);
  console.log(`   - POST /ai-nutrition`);
  console.log(`   - GET  /health`);
  console.log(`\n✨ Frontend is running on http://localhost:3000`);
});