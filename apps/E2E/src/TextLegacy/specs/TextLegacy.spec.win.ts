import { BOOT_APP_TIMEOUT, PAGE_TIMEOUT, TEXT_A11Y_ROLE, Attribute } from '../../common/consts';
import NavigateAppPage from '../../common/NavigateAppPage';
import { DEPRECATED_TEXT_FIRST_ACCESSIBILITY_LABEL, DEPRECATED_TEXT_SECOND_COMPONENT_CONTENT } from '../consts';
import TextLegacyPageObject from '../pages/TextLegacyPageObject';

// Before testing begins, allow up to 60 seconds for app to open
describe('Text Legacy Testing Initialization', () => {
  it('Wait for app load', async () => {
    await NavigateAppPage.waitForPageDisplayed(BOOT_APP_TIMEOUT);
    expect(await NavigateAppPage.isPageLoaded()).toBeTruthy(NavigateAppPage.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to Text Legacy test page', async () => {
    /* Click on component button to navigate to test page */
    await NavigateAppPage.clickAndGoToTextLegacyPage();
    await TextLegacyPageObject.waitForPageDisplayed(PAGE_TIMEOUT);

    expect(await TextLegacyPageObject.isPageLoaded()).toBeTruthy(TextLegacyPageObject.ERRORMESSAGE_PAGELOAD);
    expect(await TextLegacyPageObject.didAssertPopup()).toBeFalsy(TextLegacyPageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  });
});

describe('Text Legacy Accessibility Testing', () => {
  beforeEach(async () => {
    await TextLegacyPageObject.scrollToTestElement(await TextLegacyPageObject._deprecatedFirstComponent);
  });

  it('Validate "accessibilityRole" defaults to "ControlType.Text".', async () => {
    expect(
      await TextLegacyPageObject.compareAttribute(
        TextLegacyPageObject._deprecatedFirstComponent,
        Attribute.AccessibilityRole,
        TEXT_A11Y_ROLE,
      ),
    ).toBeTruthy();

    expect(await TextLegacyPageObject.didAssertPopup()).toBeFalsy(TextLegacyPageObject.ERRORMESSAGE_ASSERT);
  });

  it('Set "accessibilityLabel" prop. Validate "accessibilityLabel" value propagates to "Name" element attribute.', async () => {
    expect(
      await TextLegacyPageObject.compareAttribute(
        TextLegacyPageObject._deprecatedFirstComponent,
        Attribute.AccessibilityLabel,
        DEPRECATED_TEXT_FIRST_ACCESSIBILITY_LABEL,
      ),
    ).toBeTruthy();

    expect(await TextLegacyPageObject.didAssertPopup()).toBeFalsy(TextLegacyPageObject.ERRORMESSAGE_ASSERT);
  });

  it('Do not set "accessibilityLabel" prop. Validate "Name" element attribute defaults to text content.', async () => {
    expect(
      await TextLegacyPageObject.compareAttribute(
        TextLegacyPageObject._deprecatedSecondComponent,
        Attribute.AccessibilityLabel,
        DEPRECATED_TEXT_SECOND_COMPONENT_CONTENT,
      ),
    ).toBeTruthy();

    expect(await TextLegacyPageObject.didAssertPopup()).toBeFalsy(TextLegacyPageObject.ERRORMESSAGE_ASSERT);
  });
});