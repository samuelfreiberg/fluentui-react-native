import NavigateAppPage from '../../common/NavigateAppPage';
import ButtonExperimentalPageObject, { ButtonSelector } from '../pages/ButtonExperimentalPageObject';
import { ComponentSelector } from '../../common/BasePage';
import { PAGE_TIMEOUT, BOOT_APP_TIMEOUT, BUTTON_A11Y_ROLE, Keys } from '../../common/consts';
import { BUTTON_ACCESSIBILITY_LABEL, BUTTON_TEST_COMPONENT_LABEL } from '../../../TestComponents/Button/consts';

// Before testing begins, allow up to 60 seconds for app to open
describe('Experimental Button Testing Initialization', () => {
  it('Wait for app load', async () => {
    await NavigateAppPage.waitForPageDisplayed(BOOT_APP_TIMEOUT);
    await expect(await NavigateAppPage.isPageLoaded()).toBeTruthy(NavigateAppPage.ERRORMESSAGE_APPLOAD);
  });

  // Temporarily removing this until the old Button is completely deprecated. The reason being, both the deprecated button and
  // this new button are on the same test page in our test app. This means we don't have to re-navigate to the test page
  // for this experimental button.
  // it('Click and navigate to Button test page', async () => {
  //   /* Scroll to component test page button in scrollview if not already visible*/
  //   await ButtonExperimentalPageObject.scrollToComponentButton(Platform.Win32);
  //   await ButtonExperimentalPageObject.waitForButtonDisplayed(PAGE_TIMEOUT);

  //   /* Click on component button to navigate to test page */
  //   await NavigateAppPage.clickAndGoToButtonPage();
  //   await ButtonExperimentalPageObject.waitForPageDisplayed(PAGE_TIMEOUT);

  //   await expect(await ButtonExperimentalPageObject.isPageLoaded()).toBeTruthy(ButtonExperimentalPageObject.ERRORMESSAGE_PAGELOAD);
  //   await expect(await ButtonExperimentalPageObject.didAssertPopup()).toBeFalsy(ButtonExperimentalPageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  // });
});

describe('Experimental Button Accessibility Testing', () => {
  /* Scrolls and waits for the Button to be visible on the Test Page */
  beforeEach(async () => {
    await ButtonExperimentalPageObject.scrollToTestElement();
    await ButtonExperimentalPageObject.waitForPrimaryElementDisplayed(PAGE_TIMEOUT);
  });

  it('Experimental Button - Validate accessibilityRole is correct', async () => {
    await expect(await ButtonExperimentalPageObject.getAccessibilityRole()).toEqual(BUTTON_A11Y_ROLE);
    await expect(await ButtonExperimentalPageObject.didAssertPopup()).toBeFalsy(ButtonExperimentalPageObject.ERRORMESSAGE_ASSERT);
  });

  it('Experimental Button - Set accessibilityLabel', async () => {
    await expect(await ButtonExperimentalPageObject.getAccessibilityLabel(ComponentSelector.Primary)).toEqual(BUTTON_ACCESSIBILITY_LABEL);
    await expect(await ButtonExperimentalPageObject.didAssertPopup()).toBeFalsy(ButtonExperimentalPageObject.ERRORMESSAGE_ASSERT);
  });

  it('Experimental Button - Do not set accessibilityLabel -> Default to Button label', async () => {
    await expect(await ButtonExperimentalPageObject.getAccessibilityLabel(ComponentSelector.Secondary)).toEqual(
      BUTTON_TEST_COMPONENT_LABEL,
    );
    await expect(await ButtonExperimentalPageObject.didAssertPopup()).toBeFalsy(ButtonExperimentalPageObject.ERRORMESSAGE_ASSERT);
  });
});

describe('Experimental Button Functional Testing', () => {
  /* Scrolls and waits for the Button to be visible on the Test Page */
  beforeEach(async () => {
    await ButtonExperimentalPageObject.scrollToTestElement();
    await ButtonExperimentalPageObject.waitForPrimaryElementDisplayed(PAGE_TIMEOUT);
  });

  it('Validate OnClick() callback was fired -> Click', async () => {
    await ButtonExperimentalPageObject.clickComponent();
    await expect(await ButtonExperimentalPageObject.didOnClickCallbackFire()).toBeTruthy();
    await expect(await ButtonExperimentalPageObject.didAssertPopup()).toBeFalsy(ButtonExperimentalPageObject.ERRORMESSAGE_ASSERT);

    await ButtonExperimentalPageObject.clickComponent(); // Reset Button State
  });

  it('Validate OnClick() callback was fired -> Type "Enter"', async () => {
    await ButtonExperimentalPageObject.sendKey(ButtonSelector.PrimaryButton, Keys.Enter);
    await expect(await ButtonExperimentalPageObject.didOnClickCallbackFire()).toBeTruthy();
    await expect(await ButtonExperimentalPageObject.didAssertPopup()).toBeFalsy(ButtonExperimentalPageObject.ERRORMESSAGE_ASSERT);

    await ButtonExperimentalPageObject.clickComponent(); // Reset Button State
  });

  it('Validate OnClick() callback was fired -> Type "Spacebar"', async () => {
    await ButtonExperimentalPageObject.sendKey(ButtonSelector.PrimaryButton, Keys.Spacebar);
    await expect(await ButtonExperimentalPageObject.didOnClickCallbackFire()).toBeTruthy();
    await expect(await ButtonExperimentalPageObject.didAssertPopup()).toBeFalsy(ButtonExperimentalPageObject.ERRORMESSAGE_ASSERT);
  });
});
