describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should say hello', async () => {
    await expect(element(by.text('Hello, React Native!'))).toBeVisible();
  });

  it('should load restaurants', async () => {
    await expect(element(by.text('Burger Place'))).toBeVisible();
  });
});
