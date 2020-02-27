import * as React from 'react';
import { IPressableState, IPressableProps } from '../Pressable';
import { ViewProps } from 'react-native';
import { IRenderData } from '@uifabricshared/foundation-composable';
import { ITextProps } from '../Text';
import { IViewWin32Props } from '@office-iss/react-native-win32';

export const checkboxName = 'Checkbox';

export interface ICheckboxInfo extends IPressableState {
  checked: boolean;
}

export interface ICheckboxState {
  info: ICheckboxInfo;
}

export interface ICheckboxProps extends IPressableProps {
  ariaLabel?: string;

  defaultChecked?: boolean;

  disabled?: boolean;

  label?: string;
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
