import { CHECKBOX_TESTPAGE } from '../../../RNTester/TestComponents/Checkbox/consts';
import { BasePage, By, ReactComponent } from '../../common/BasePage';

class CheckboxTestPage extends BasePage {
  get _testPage() {
    return By(CHECKBOX_TESTPAGE);
  }

  get _a11yCheckbox() {
    return ReactComponent('CircularCheckbox');
  }
}

export default new CheckboxTestPage();

// Select a Checkbox element and feed in a11y props. If error, that means the element doesn't support the a11y prop
