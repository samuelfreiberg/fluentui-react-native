import CheckboxLegacyPageObject from '../pages/CheckboxLegacyPageObject';

describe('Checkbox Legacy Testing Initialization', () => {
  it('Wait for app load', async () => {
    expect(await CheckboxLegacyPageObject.waitForInitialPageToDisplay()).toBeTruthy(CheckboxLegacyPageObject.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to Checkbox Legacy test page', async () => {
    await CheckboxLegacyPageObject.navigateToPageAndLoadTests();
    expect(await CheckboxLegacyPageObject.isPageLoaded()).toBeTruthy(CheckboxLegacyPageObject.ERRORMESSAGE_PAGELOAD);
  });
});
