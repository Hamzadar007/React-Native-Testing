describe('App E2E Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display splash screen with logo and loading indicator', async () => {
    await expect(element(by.id('logo-image'))).toBeVisible();
    await expect(element(by.id('loading-indicator'))).toBeVisible();
  });

  it('should navigate to Onboarding Screen', async () => {
    await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(10000);
    await expect(element(by.id('OnboardingScreen'))).toBeVisible();
  });
});
