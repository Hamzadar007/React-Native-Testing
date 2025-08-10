This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# APK Generation

This project automatically generates Android APK files after successful merges to the main branch using GitHub Actions.

## How to Get the APK

### Option 1: Download from GitHub Actions (Recommended)

1. **After a successful merge to main branch**, go to your GitHub repository
2. Click on the **"Actions"** tab
3. Find the latest successful workflow run (should be named "Pull Request & Push Checks")
4. Click on the **"Build Android APK"** job
5. Scroll down to the **Artifacts** section
6. Click **"app-release"** to download the APK file

### Option 2: Build Locally

You can also build the APK locally using these commands:

```bash
# Build release APK
yarn build:android

# Build debug APK
yarn build:android-debug
```

### Option 3: Use the Build Script

```bash
# Build both APKs with detailed output
./scripts/build-apk.sh
```

The APK will be generated at:
- **Release APK**: `android/app/build/outputs/apk/release/app-release.apk`
- **Debug APK**: `android/app/build/outputs/apk/debug/app-debug.apk`

## APK Build Process

The automated APK build process:
1. ✅ Runs code quality checks (ESLint, Prettier)
2. ✅ Runs all tests (Jest)
3. 🏗️ Builds the Android APK using Gradle
4. 📤 Uploads the APK as a GitHub artifact
5. 🔄 APK is retained for 30 days

## Requirements

- The APK build only triggers on **pushes to main branch** (not on pull requests)
- All tests must pass before the APK is built
- The APK is signed with the debug keystore (for development/testing purposes)

---

# Git Hooks with Husky

This project uses [Husky](https://typicode.github.io/husky/) to manage Git hooks for code quality and testing.

## Available Hooks

- **pre-commit**: Automatically runs `yarn lint:fix`, `yarn format`, and `yarn test:unit` before each commit to ensure code quality
- **pre-push**: Automatically runs `yarn test:all` before pushing to ensure all tests (unit + E2E) pass

## How it works

1. **Pre-commit**: When you run `git commit`, Husky will automatically:
   - Fix any linting issues with ESLint
   - Format your code with Prettier
   - Only allow the commit if both operations succeed

2. **Pre-push**: When you run `git push`, Husky will automatically:
   - Run all unit tests and E2E tests
   - Only allow the push if all tests pass

## Manual execution

You can also run these commands manually:

```bash
# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Run unit tests only
yarn test:unit

# Run E2E tests only
yarn test:e2e

# Run all tests (unit + E2E)
yarn test:all
```

## Skipping hooks (if needed)

In rare cases where you need to skip the hooks:

```bash
# Skip pre-commit hook
git commit --no-verify -m "your message"

# Skip pre-push hook
git push --no-verify
```

**Note**: Only use these flags when absolutely necessary, as they bypass important quality checks.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
