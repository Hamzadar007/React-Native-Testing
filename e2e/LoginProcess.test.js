describe('App E2E Tests', () => {
    beforeAll(async () => {
      await device.launchApp();
      await waitFor(element(by.id('OnboardingScreen')))
      .toBeVisible()
      .withTimeout(10000);
      await element(by.text("Next")).tap()
      await element(by.text("Next")).tap()
      await element(by.text("Login")).tap()
      await element(by.id("email")).typeText("hamzadar535@gmail.com")
      await element(by.id("password")).typeText("12345678")
      await device.pressBack()
    });
  
    it("should fill email amd password on login screen and navigate to home screen",async()=>{
        await expect(element(by.id("Login"))).toBeVisible()
        await element(by.id("Login")).tap()
        await expect(element(by.text("Testing Complete"))).toBeVisible()
        // await waitFor(element(by.text("Testing Complete")))
        // .toBeVisible()
        // .withTimeout(10000);
       

    })
  
  });
  