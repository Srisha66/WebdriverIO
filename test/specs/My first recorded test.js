describe("My first recorded test", () => {
  it("tests My first recorded test", async () => {
    await browser.setWindowSize(732, 695)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("aria/ Login").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
  });
});
