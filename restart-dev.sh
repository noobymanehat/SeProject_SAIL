#!/bin/bash

# Script to cleanly restart the Next.js development server

echo "🔄 Restarting Next.js development server..."

# Kill any existing Next.js processes
echo "📋 Stopping existing processes..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "node.*next" 2>/dev/null || true

# Clean Next.js cache
echo "🧹 Cleaning Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Wait a moment
sleep 2

# Start the development server
echo "🚀 Starting development server..."
npm run dev

echo "✅ Development server restarted!"