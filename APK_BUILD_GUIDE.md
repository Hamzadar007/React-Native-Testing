# APK Generation Guide

This guide explains how to generate Android APK files for your React Native app, both automatically via GitHub Actions and manually on your local machine.

## 🚀 Automatic APK Generation (GitHub Actions)

### How It Works

1. **Trigger**: APK generation automatically starts when code is pushed/merged to the `main` branch
2. **Prerequisites**: Code quality checks and tests must pass first
3. **Build Process**: Uses Gradle to build a release APK
4. **Output**: APK is uploaded as a GitHub Actions artifact

### How to Get the APK

1. **Navigate to GitHub Actions**:
   - Go to your repository on GitHub
   - Click the **"Actions"** tab

2. **Find the Latest Run**:
   - Look for the most recent "Pull Request & Push Checks" workflow
   - Click on it to view details

3. **Download the APK**:
   - Click on the **"Build Android APK"** job
   - Scroll down to the **Artifacts** section
   - Click **"app-release"** to download the APK

### APK Details

- **File Name**: `app-release.apk`
- **Build Type**: Release (optimized for distribution)
- **Retention**: 30 days
- **Signing**: Debug keystore (for development/testing)

