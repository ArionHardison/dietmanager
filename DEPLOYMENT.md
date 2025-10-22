# DietManager Vercel Deployment Guide

## Overview
This guide explains how to deploy DietManager to Vercel with custom domains:
- **Frontend**: https://dietmanager.com (and www.dietmanager.com)
- **API**: https://api.dietmanager.com

## Prerequisites
1. Vercel account
2. Domain name (dietmanager.com) registered
3. Access to domain DNS settings

## Deployment Steps

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Initial Deployment
From the project root directory:
```bash
vercel
```

Follow the prompts:
- Project name: `dietmanager`
- Scope: Select or create your team
- Link to existing project: No (first time) or Yes (subsequent deployments)

### 4. Production Deployment
```bash
vercel --prod
```

### 5. Configure Custom Domains

#### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Domains" section
3. Add the following domains:
   - `dietmanager.com`
   - `www.dietmanager.com`
   - `api.dietmanager.com`

#### Configure DNS Records:
Add these records to your domain provider:

For the main domain:
```
Type: A
Name: @
Value: 76.76.21.21
```

For www subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

For API subdomain:
```
Type: CNAME
Name: api
Value: cname.vercel-dns.com
```

### 6. Environment Variables

Set these in Vercel Dashboard (Settings → Environment Variables):

```bash
# Production Variables
API_URL=https://api.dietmanager.com
CLIENT_URL=https://dietmanager.com
NODE_ENV=production
APP_NAME=DietManager
AI_ENABLED=true
AI_NUTRITION_ENABLED=true
ENABLE_AI_FEATURES=true
NUTRITION_API_ENABLED=true
DEMO_MODE=false

# Optional (add if needed)
MAP_API_KEY=your-map-api-key
PAYPAL_CLIENT_ID_SANDBOX=your-paypal-sandbox-id
PAYPAL_CLIENT_ID_LIVE=your-paypal-live-id
PAYPAL_LIVE_MODE=false

# Future Features
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
ANALYTICS_ID=your-analytics-id
SENTRY_DSN=your-sentry-dsn
```

### 7. API Routing Configuration

The API is automatically routed through the `/api` path. With the custom domain setup:
- `https://api.dietmanager.com/menu-items` → `/api/menu-items`
- `https://api.dietmanager.com/menu-categories` → `/api/menu-categories`
- `https://api.dietmanager.com/settings` → `/api/settings`
- `https://api.dietmanager.com/ai-nutrition` → `/api/ai-nutrition`

### 8. CORS Configuration

CORS is configured to allow:
- `https://dietmanager.com`
- `https://www.dietmanager.com`
- `https://api.dietmanager.com`

In development, all origins are allowed (`*`).

## Deployment Commands

### Quick Deploy to Production
```bash
vercel --prod
```

### Deploy with Specific Environment
```bash
vercel --prod --env NODE_ENV=production
```

### Check Deployment Status
```bash
vercel ls
```

### View Logs
```bash
vercel logs dietmanager.vercel.app
```

### Rollback Deployment
```bash
vercel rollback
```

## Project Structure for Vercel

```
dietmanager/
├── vercel.json           # Vercel configuration
├── api/                  # Serverless functions (API endpoints)
│   ├── _utils.js        # Shared utilities with CORS
│   ├── menu-items.js    # Menu items endpoint
│   ├── menu-categories.js # Categories endpoint
│   ├── settings.js      # Settings endpoint
│   └── ai-nutrition.js  # AI features endpoint
├── dietmanager-client/   # Nuxt.js frontend
│   ├── .env.production  # Production environment
│   ├── nuxt.config.js   # Nuxt configuration
│   └── [other files]
└── .env.production      # Root production environment

```

## Troubleshooting

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records with: `nslookup dietmanager.com`
- Check Vercel domain status in dashboard

### CORS Issues
- Ensure API_URL in environment matches exactly
- Check browser console for specific CORS errors
- Verify `Access-Control-Allow-Origin` headers in API responses

### API Not Responding
- Check function logs: `vercel logs --source=lambda`
- Verify API endpoints in `/api` directory
- Ensure serverless function timeout is sufficient

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

## SSL/HTTPS
Vercel automatically provisions SSL certificates for all custom domains. No additional configuration needed.

## Monitoring
- Use Vercel Analytics for performance monitoring
- Set up error tracking with Sentry (optional)
- Monitor API function execution times in Vercel dashboard

## CI/CD with GitHub
1. Connect GitHub repository in Vercel dashboard
2. Enable automatic deployments for main branch
3. Preview deployments created for pull requests

## Scaling Considerations
- API functions have 10-second timeout (30s for AI endpoints)
- Serverless functions scale automatically
- Consider implementing caching for frequently accessed data
- Use CDN for static assets (automatic with Vercel)

## Security Best Practices
1. Never commit `.env` files
2. Use environment variables for sensitive data
3. Implement rate limiting for API endpoints
4. Keep dependencies updated
5. Use HTTPS for all communications
6. Implement proper authentication (future)