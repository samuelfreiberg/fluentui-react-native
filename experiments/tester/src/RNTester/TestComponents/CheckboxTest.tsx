import * as React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-uifabric';

function onChange0(isChecked: boolean) {
  console.log(isChecked);
}

export const CheckboxTest: React.FunctionComponent<{}> = () => {
  const [isChecked1, setChecked1] = React.useState(false);
  const onChange1 = React.useCallback(checked => {
    setChecked1(!!checked);
  }, []);

  const [isChecked2, setChecked2] = React.useState(false);
  const onChange2 = React.useCallback(checked => {
    setChecked2(!!checked);
  }, []);

  return (
    <View>
      <Checkbox label="This is an Uncontrolled Checkbox" onChange={onChange0} defaultChecked={false} ariaLabel="Hello there" />
      <Checkbox label="This is an Uncontrolled Checkbox" onChange={onChange0} defaultChecked={true} />
      <Checkbox label="This is a controlled Checkbox" onChange={onChange1} checked={isChecked1} />
      <Checkbox label="This is a controlled Checkbox" onChange={onChange2} boxSide="end" checked={isChecked2} ariaLabel="Hello there" />
    </View>
  );
};
