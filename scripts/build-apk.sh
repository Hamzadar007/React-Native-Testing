#!/bin/bash

# APK Build Script for React Native App
# This script builds both debug and release APKs

set -e  # Exit on any error

echo "🚀 Starting APK build process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if Android directory exists
if [ ! -d "android" ]; then
    echo "❌ Error: Android directory not found. Make sure you're in a React Native project."
    exit 1
fi

# Make gradlew executable
echo "📱 Making gradlew executable..."
chmod +x android/gradlew

# Build debug APK
echo "🔨 Building debug APK..."
cd android
./gradlew assembleDebug
echo "✅ Debug APK built successfully!"

# Build release APK
echo "🔨 Building release APK..."
./gradlew assembleRelease
echo "✅ Release APK built successfully!"

# Go back to project root
cd ..

# Show APK locations
echo ""
echo "🎉 APK build completed successfully!"
echo ""
echo "📱 APK files location:"
echo "   Debug APK:   android/app/build/outputs/apk/debug/app-debug.apk"
echo "   Release APK: android/app/build/outputs/apk/release/app-release.apk"
echo ""
echo "💡 You can install the APK on your device using:"
echo "   adb install android/app/build/outputs/apk/debug/app-debug.apk"
echo "   adb install android/app/build/outputs/apk/release/app-release.apk"
echo ""
echo "📊 APK file sizes:"
if [ -f "android/app/build/outputs/apk/debug/app-debug.apk" ]; then
    echo "   Debug APK:   $(du -h android/app/build/outputs/apk/debug/app-debug.apk | cut -f1)"
fi
if [ -f "android/app/build/outputs/apk/release/app-release.apk" ]; then
    echo "   Release APK: $(du -h android/app/build/outputs/apk/release/app-release.apk | cut -f1)"
fi 