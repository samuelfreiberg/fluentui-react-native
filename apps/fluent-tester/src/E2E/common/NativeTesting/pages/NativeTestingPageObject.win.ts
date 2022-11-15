import { BasePage } from '../../../common/BasePage';
import { TESTPAGE_BUTTONS_SCROLLVIEWER } from '../../../../TestComponents/Common/consts';

class NativeTestingPageObject extends BasePage {
  async waitForScrollViewDisplayed(timeout?: number): Promise<void> {
    await browser.waitUntil(async () => await this.doesScrollViewParentExist(), {
      timeout: timeout ?? this.waitForUiEvent,
      timeoutMsg:
        'For testing purposes we require that the root view contains a non-empty, immutable ScrollView of buttons that navigate to test pages.',
      interval: 1000,
    });
  }

  async doesScrollViewParentExist(): Promise<boolean> {
    return await (await this._testPageButtonScrollViewer).isDisplayed();
  }

  /* Validate the Children of the ScrollView stay intact. The children are the buttons that
   * navigate to each test page. Also, validate these children exist with the proper testId format */
  async validateScrollViewChildren() {
    // Gets all the children
    const testChildren = await (await this._testPageButtonScrollViewer).$$('//*');

    // Ensure the testID (maps 1:1 to automationId) properties of the button children match the defined testing format
    const reg = new RegExp('Homepage_[a-zA-Z]*_Button');

    // Iterate through children. Validate at least one valid button exists as a child to the ScrollView.
    // If automationId is found in the wrong format, return false.
    for await (const child of testChildren) {
      const autoId = await child.getAttribute('AutomationId');
      if (autoId && autoId !== TESTPAGE_BUTTONS_SCROLLVIEWER) {
        await expect(autoId.match(reg)).toBeTruthy(
          'The automation ID: ' + autoId + ' is in the wrong format. It must match the following RegEx: Homepage_[a-zA-Z]*_Button.',
        );
      }
    }
  }
}

export default new NativeTestingPageObject();
