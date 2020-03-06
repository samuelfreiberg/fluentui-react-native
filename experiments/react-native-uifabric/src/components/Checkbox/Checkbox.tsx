/** @jsx withSlots */
import * as React from 'react';
import { View, Text } from 'react-native';
import { ICheckboxState, ICheckboxProps, ICheckboxSlotProps, ICheckboxRenderData, ICheckboxType, checkboxName } from './Checkbox.types';
import { compose, IUseComposeStyling } from '@uifabricshared/foundation-compose';
import { ISlots, withSlots } from '@uifabricshared/foundation-composable';
import { filterViewProps } from '@fluentui-native/adapters';
import { settings } from './Checkbox.settings';
import { mergeSettings } from '@uifabricshared/foundation-settings';
import { foregroundColorTokens, textTokens, backgroundColorTokens, borderTokens } from '@fluentui-native/tokens';
import { useAsPressable, useAsToggleCheckbox } from '@fluentui-native/interactive-hooks';

export const Checkbox = compose<ICheckboxType>({
  displayName: checkboxName,

  usePrepareProps: (userProps: ICheckboxProps, useStyling: IUseComposeStyling<ICheckboxType>) => {
    const { ariaLabel, checked, defaultChecked, boxSide, disabled, label, ...rest } = userProps;

    const data = useAsToggleCheckbox(defaultChecked || false);

    const onPress = React.useCallback(() => {
      data.onChange();
      userProps.onChange && userProps.onChange(!data.checked);
    }, [data, userProps]);

    const pressable = useAsPressable({ onPress: onPress, ...rest });

    const state: ICheckboxState = {
      info: {
        ...pressable.state,
        disabled: disabled || false,
        checked: checked != undefined ? checked : data.checked,
        boxSide: boxSide == undefined ? 'start' : boxSide
      }
    };

    // Grab the styling information from the userProps, referencing the state as well as the props.
    const styleProps = useStyling(userProps, (override: string) => state.info[override] || userProps[override]);

    // let accessibilityStates: string[] = [];
    // if (state.info.disabled) {
    //   accessibilityStates = ['disabled'];
    // } else if (state.info.checked) {
    //   accessibilityStates = ['checked'];
    // }

    const allyStates = state.info.disabled ? ['disabled'] : [];

    const slotProps = mergeSettings<ICheckboxSlotProps>(styleProps, {
      root: {
        rest,
        ...pressable.props,
        accessibilityRole: 'checkbox',
        accessibilityLabel: ariaLabel ? ariaLabel : label,
        accessibilityStates: allyStates
        // Actions: 'Select' and "RemoveFromSelection"
      },
      content: { children: label }
    });

    return { slotProps, state };
  },

  render: (Slots: ISlots<ICheckboxSlotProps>, renderData: ICheckboxRenderData, ...children: React.ReactNode[]) => {
    if (renderData.state && renderData.state.info.boxSide == 'start') {
      return (
        <Slots.root>
          <Slots.checkbox>
            <Slots.checkmark />
          </Slots.checkbox>
          <Slots.content />
          {children}
        </Slots.root>
      );
    } else {
      return (
        <Slots.root>
          <Slots.content />
          <Slots.checkbox>
            <Slots.checkmark />
          </Slots.checkbox>
          {children}
        </Slots.root>
      );
    }
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
    checkbox: [borderTokens],
    checkmark: [backgroundColorTokens],
    content: [foregroundColorTokens, textTokens]
  }
});

export default Checkbox;
