import NavigateAppPage from '../../common/NavigateAppPage';
import ExperimentalTextPageObject from '../pages/ExperimentalTextPageObject.win';
import { PAGE_TIMEOUT, BOOT_APP_TIMEOUT } from '../../common/consts';
import { Platform } from '../../common/BasePage';

// Before testing begins, allow up to 60 seconds for app to open
describe('Experimental Text Testing Initialization', () => {
  it('Wait for app load', async () => {
    await NavigateAppPage.waitForPageDisplayed(BOOT_APP_TIMEOUT);
    await expect(await NavigateAppPage.isPageLoaded()).toBeTruthy(NavigateAppPage.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to Experimental Text test page', async () => {
    await ExperimentalTextPageObject.scrollToComponentButton(Platform.iOS);
    await ExperimentalTextPageObject.waitForButtonDisplayed(PAGE_TIMEOUT);

    /* Click on component button to navigate to test page */
    await NavigateAppPage.clickAndGoToExperimentalTextPage();
    await ExperimentalTextPageObject.waitForPageDisplayed(PAGE_TIMEOUT);

    await expect(await ExperimentalTextPageObject.isPageLoaded()).toBeTruthy(ExperimentalTextPageObject.ERRORMESSAGE_PAGELOAD);
  });
});
