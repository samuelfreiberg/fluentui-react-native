import * as React from 'react';
import { IPressableProps } from '../Pressable/Pressable.props';
import { IPressableState } from '@fluentui-native/interactive-hooks';
import { ViewProps } from 'react-native';
import { IRenderData } from '@uifabricshared/foundation-composable';
import { ITextProps } from '@fluentui-native/text';
import { IViewWin32Props } from '@office-iss/react-native-win32';

export const checkboxName = 'Checkbox';

export interface ICheckboxInfo extends IPressableState {
  checked: boolean;

  disabled: boolean;

  boxSide: string;
}

export interface ICheckboxState {
  info: ICheckboxInfo;
}

export interface ICheckboxProps extends IPressableProps {
  ariaLabel?: string;

  /*
   ** Checked state. Mutually exclusive to “defaultChecked”. Use this if you control the checked state at a higher level
   ** and plan to pass in the correct value based on handling onChange events and re-rendering.
   */
  checked?: boolean;

  /*
   ** Default checked state. Mutually exclusive to ‘checked’. Use this if you want an uncontrolled component, and
   ** want the Checkbox instance to maintain its own state.
   */
  defaultChecked?: boolean;

  boxSide?: string;

  disabled?: boolean;

  label?: string;

  onChange?: (isChecked: boolean) => void;
}

export interface ICheckboxSlotProps {
  root: React.PropsWithRef<IViewWin32Props>;
  checkbox: ViewProps;
  checkmark: ViewProps;
  content: ITextProps;
}

export type ICheckboxRenderData = IRenderData<ICheckboxSlotProps, ICheckboxState>;

export interface ICheckboxType {
  props: ICheckboxProps;
  //tokens:
  slotProps: ICheckboxSlotProps;
  state: ICheckboxState;
}
