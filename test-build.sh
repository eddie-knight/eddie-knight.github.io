#!/bin/bash
# Test script to verify GitHub Actions build locally
# This mimics the build job from .github/workflows/pages.yml

set -e  # Exit on error

echo "🧪 Testing GitHub Actions build locally..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run this script from the personal-website directory.${NC}"
    exit 1
fi

# Step 1: Install dependencies (mimics: npm ci)
echo -e "${YELLOW}📦 Step 1: Installing dependencies (npm ci)...${NC}"
if npm ci; then
    echo -e "${GREEN}✅ Dependencies installed successfully${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo ""

# Step 2: Build with Vite (mimics: npm run build with NODE_ENV=production)
echo -e "${YELLOW}🔨 Step 2: Building with Vite (production mode)...${NC}"
if NODE_ENV=production npm run build; then
    echo -e "${GREEN}✅ Build completed successfully${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo ""

# Step 3: Verify dist directory exists and has content
echo -e "${YELLOW}🔍 Step 3: Verifying build output...${NC}"
if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
    echo -e "${GREEN}✅ dist/ directory exists and contains files${NC}"
    echo ""
    echo "Build output summary:"
    du -sh dist/
    echo ""
    echo "Files in dist/:"
    find dist -type f | head -10
    if [ $(find dist -type f | wc -l) -gt 10 ]; then
        echo "... and more"
    fi
else
    echo -e "${RED}❌ dist/ directory is missing or empty${NC}"
    exit 1
fi
echo ""

# Step 4: Check for index.html
if [ -f "dist/index.html" ]; then
    echo -e "${GREEN}✅ index.html found${NC}"
else
    echo -e "${RED}❌ index.html not found in dist/${NC}"
    exit 1
fi
echo ""

echo -e "${GREEN}🎉 All tests passed! Build is ready for GitHub Pages deployment.${NC}"
echo ""
echo "To preview the build locally, run:"
echo "  npm run preview"
echo "  or"
echo "  make preview"


