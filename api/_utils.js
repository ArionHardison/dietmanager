// Shared utilities for serverless functions

// Determine allowed origins based on environment
const getAllowedOrigins = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production'

  if (isDevelopment) {
    // Allow localhost for development
    return '*'
  }

  // Production allowed origins
  return [
    'https://dietmanager.com',
    'https://www.dietmanager.com',
    'https://api.dietmanager.com'
  ].join(', ')
}

export const corsHeaders = {
  'Access-Control-Allow-Origin': getAllowedOrigins(),
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Authorization',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json'
}

export const handleCors = (req, res, handler) => {
  if (req.method === 'OPTIONS') {
    res.status(200).json({ ok: true })
    return
  }
  return handler(req, res)
}

export const withCors = (handler) => {
  return async (req, res) => {
    // Dynamic CORS for production vs development
    const origin = req.headers.origin
    const isDevelopment = process.env.NODE_ENV !== 'production'

    if (isDevelopment) {
      // Allow all origins in development
      res.setHeader('Access-Control-Allow-Origin', '*')
    } else {
      // Check if origin is allowed in production
      const allowedOrigins = [
        'https://dietmanager.com',
        'https://www.dietmanager.com',
        'https://api.dietmanager.com'
      ]

      if (origin && allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin)
      } else {
        res.setHeader('Access-Control-Allow-Origin', 'https://dietmanager.com')
      }
    }

    // Set other CORS headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Content-Type', 'application/json')

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      return res.status(200).end()
    }

    // Execute handler
    try {
      return await handler(req, res)
    } catch (error) {
      console.error('API Error:', error)
      return res.status(500).json({
        error: 'Internal server error',
        message: error.message
      })
    }
  }
}