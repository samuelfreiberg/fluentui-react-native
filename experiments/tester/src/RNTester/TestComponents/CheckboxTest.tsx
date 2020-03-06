import * as React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-uifabric';

function onChange(isChecked: boolean) {
  console.log(isChecked);
}

export const CheckboxTest: React.FunctionComponent<{}> = () => {
  return (
    <View>
      <Checkbox label="This is an Uncontrolled Checkbox" onChange={onChange} defaultChecked={false} />
      <Checkbox label="This is an Uncontrolled Checkbox" disabled={true} onChange={onChange} defaultChecked={false} />
    </View>
  );
};

export const CheckboxControlledTest: React.FunctionComponent<{}> = () => {
  const [isChecked, setChecked] = React.useState(false);
  const onChange = React.useCallback(checked => {
    setChecked(!!checked);
  }, []);
  return <Checkbox label="This is a controlled Checkbox" onChange={onChange} checked={isChecked} />;
};
