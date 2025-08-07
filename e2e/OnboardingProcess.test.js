import {by} from "detox"

describe('App E2E Tests', () => {
    beforeAll(async () => {
      await device.launchApp();
      await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(10000);
    });
  
  it("should display the first slide and navigate to the second slide",async()=>{
    await expect(element(by.text("Grab all events now only in your hands"))).toBeVisible()
    await element(by.id("OnboardingScreen")).takeScreenshot()
    await element(by.text("Next")).tap()

    await expect(element(by.text("Easy payment & fast event ticket"))).toBeVisible()
    await element(by.id("OnboardingScreen")).takeScreenshot()
  
    
  })

  it("should navigate to login screen",async()=>{
    await waitFor(element(by.id('OnboardingScreen')))
    .toBeVisible()
    .withTimeout(10000);
    await element(by.id("OnboardingScreen")).takeScreenshot()
 
    await element(by.text("Next")).tap()
    await element(by.text("Login")).tap()

    await expect(element(by.id("LoginScreen"))).toBeVisible()
    
  })
  });
  