#!/bin/bash
# Script to verify profile image setup

echo "Checking portfolio structure..."

# Check if public/images folder exists
if [ -d "public/images" ]; then
    echo "✓ public/images folder exists"
else
    echo "✗ public/images folder missing"
    exit 1
fi

# Check if profile.jpg exists
if [ -f "public/images/profile.jpg" ]; then
    echo "✓ profile.jpg found"
    SIZE=$(ls -lh public/images/profile.jpg | awk '{print $5}')
    echo "  File size: $SIZE"
else
    echo "✗ profile.jpg not found in public/images/"
    echo "  Please save your profile image as: public/images/profile.jpg"
fi

echo ""
echo "Setup complete! Run 'npm run dev' to test the portfolio."
