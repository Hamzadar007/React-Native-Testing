# APK Signing Setup for CI/CD

This guide explains how to set up APK signing for your React Native app in the GitHub Actions CI/CD workflow.

## Prerequisites

- Android Studio or command line tools installed
- Your React Native project configured

## Step 1: Generate a Keystore File

### Option A: Using Android Studio
1. Open your project in Android Studio
2. Go to **Build** → **Generate Signed Bundle / APK**
3. Select **APK** and click **Next**
4. Click **Create new** to create a new keystore
5. Fill in the required information:
   - **Key store path**: Choose a location and name (e.g., `release.keystore`)
   - **Password**: Create a strong password
   - **Alias**: Create a key alias (e.g., `release-key`)
   - **Key password**: Create a key password
   - **Validity**: 25 years (recommended)
   - **Certificate**: Fill in your details
6. Click **OK** to generate the keystore

### Option B: Using Command Line
```bash
keytool -genkey -v -keystore release.keystore -alias release-key -keyalg RSA -keysize 2048 -validity 10000
```

## Step 2: Convert Keystore to Base64

Convert your keystore file to base64 for GitHub secrets:

```bash
# On macOS/Linux
base64 -i release.keystore | tr -d '\n'

# On Windows (PowerShell)
[Convert]::ToBase64String([IO.File]::ReadAllBytes("release.keystore"))
```

## Step 3: Add GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions** and add these secrets:

1. **KEYSTORE_BASE64**: The base64-encoded keystore file
2. **KEYSTORE_PASSWORD**: The keystore password
3. **KEY_ALIAS**: The key alias
4. **KEY_PASSWORD**: The key password

## Step 4: Update Your Workflow

The workflow has been updated to:
- Generate a signed release APK instead of debug APK
- Use the keystore from GitHub secrets
- Upload the signed APK as an artifact

## Step 5: Test the Workflow

1. Push your changes to the main branch
2. Check the GitHub Actions tab
3. The workflow will build and sign your APK
4. Download the signed APK from the artifacts section

## Important Notes

- **Keep your keystore file secure**: Never commit it to your repository
- **Backup your keystore**: Store it safely - you'll need it for future app updates
- **Use strong passwords**: Make sure your keystore and key passwords are secure
- **Test thoroughly**: Verify the signed APK works on devices before distribution

## Troubleshooting

### Common Issues

1. **Keystore not found**: Ensure the keystore file is properly created and converted to base64
2. **Password mismatch**: Verify the passwords in GitHub secrets match your keystore
3. **Build failures**: Check the workflow logs for specific error messages

### Verification

To verify your APK is properly signed:
```bash
jarsigner -verify -verbose -certs app-release.apk
```

## Security Best Practices

- Use different keystores for debug and release builds
- Store keystore files securely outside your repository
- Regularly rotate your signing keys
- Use strong, unique passwords for each environment
