import NavigateAppPage from '../../common/NavigateAppPage';
import SvgPageObject from '../pages/SvgPageObject';
import { PAGE_TIMEOUT, BOOT_APP_TIMEOUT } from '../../common/consts';
import { Platform } from '../../common/BasePage';

// Before testing begins, allow up to 60 seconds for app to open
describe('Svg Testing Initialization', () => {
  it('Wait for app load', async () => {
    await NavigateAppPage.waitForPageDisplayed(BOOT_APP_TIMEOUT);
    await expect(await NavigateAppPage.isPageLoaded()).toBeTruthy(NavigateAppPage.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to Svg test page', async () => {
    /* Scroll to component test page button in scrollview if not already visible*/
    await SvgPageObject.scrollToComponentButton(Platform.Win32);

    /* Click on component button to navigate to test page */
    await NavigateAppPage.clickAndGoToSvgPage();
    await SvgPageObject.waitForPageDisplayed(PAGE_TIMEOUT);

    await expect(await SvgPageObject.isPageLoaded()).toBeTruthy(SvgPageObject.ERRORMESSAGE_PAGELOAD);
    await expect(await SvgPageObject.didAssertPopup()).toBeFalsy(SvgPageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  });
});
