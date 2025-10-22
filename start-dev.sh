#!/bin/bash

echo "🚀 Starting DietManager Development Environment..."
echo ""

# Function to handle cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down development servers..."
    kill $API_PID $CLIENT_PID 2>/dev/null
    exit
}

# Trap exit signals
trap cleanup EXIT INT TERM

# Start API server
echo "📡 Starting API server on port 4000..."
node dev-server.mjs &
API_PID=$!

# Wait a moment for API to start
sleep 2

# Start client
echo "💻 Starting frontend on port 3000..."
cd dietmanager-client
API_URL=http://localhost:4000 npm run dev &
CLIENT_PID=$!

echo ""
echo "✨ DietManager is running!"
echo "   - Frontend: http://localhost:3000"
echo "   - API:      http://localhost:4000"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for processes
wait