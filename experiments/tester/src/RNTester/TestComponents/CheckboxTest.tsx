import * as React from 'react';
import { Checkbox } from 'react-native-uifabric';

function onChange(isChecked: boolean) {
  console.log(isChecked);
}

export const CheckboxTest: React.FunctionComponent<{}> = () => {
  return <Checkbox label="This is a test checkbox" onChange={onChange} />;
};
