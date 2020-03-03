/** @jsx withSlots */
import * as React from 'react';
import { View, Text } from 'react-native';
import { ICheckboxState, ICheckboxProps, ICheckboxSlotProps, ICheckboxRenderData, ICheckboxType, checkboxName } from './Checkbox.types';
import { compose, IUseComposeStyling } from '@uifabricshared/foundation-compose';
import { ISlots, withSlots } from '@uifabricshared/foundation-composable';
import { filterViewProps } from '@fluentui-native/adapters';
import { settings } from './Checkbox.settings';
import { mergeSettings } from '@uifabricshared/foundation-settings';
import { foregroundColorTokens, textTokens } from '@fluentui-native/tokens';
import { useAsPressable, useAsToggleCheckbox } from '@fluentui-native/interactive-hooks';

export const Checkbox = compose<ICheckboxType>({
  displayName: checkboxName,

  usePrepareProps: (userProps: ICheckboxProps, useStyling: IUseComposeStyling<ICheckboxType>) => {
    const { ariaLabel, defaultChecked, disabled, label, ...rest } = userProps;

    const data = useAsToggleCheckbox(defaultChecked == true ? true : false);

    const onPress = React.useCallback(() => {
      data.onChange();
    }, [data, userProps]);

    const pressable = useAsPressable({ onPress: onPress, ...rest });

    const state: ICheckboxState = {
      info: {
        ...pressable.state,
        checked: data.checked
      }
    };

    // Grab the styling information from the userProps, referencing the state as well as the props.
    const styleProps = useStyling(userProps, (override: string) => state.info[override] || userProps[override]);

    const slotProps = mergeSettings<ICheckboxSlotProps>(styleProps, {
      root: {
        rest,
        ...pressable.props,
        accessibilityRole: 'checkbox',
        accessibilityLabel: ariaLabel ? ariaLabel : label
        // Actions: 'Select' and "RemoveFromSelection"
      },
      content: { children: label }
    });

    return { slotProps, state };
  },

  render: (Slots: ISlots<ICheckboxSlotProps>, renderData: ICheckboxRenderData, ...children: React.ReactNode[]) => {
    return (
      <Slots.root>
        <Slots.checkbox>
          <Slots.checkmark />
        </Slots.checkbox>
        <Slots.content />
        {children}
      </Slots.root>
    );
  },

  settings,
  slots: {
    root: View,
    checkbox: { slotType: View, filter: filterViewProps },
    checkmark: { slotType: View, filter: filterViewProps },
    content: Text
  },
  styles: {
    root: [],
    checkbox: [],
    checkmark: [],
    content: [foregroundColorTokens, textTokens]
  }
});

export default Checkbox;
