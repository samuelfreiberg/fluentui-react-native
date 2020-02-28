import { IComposeSettings } from '@uifabricshared/foundation-compose';
import { checkboxName, ICheckboxType } from './Checkbox.types';

export const settings: IComposeSettings<ICheckboxType> = [
  {
    root: {
      accessible: true,
      acceptsKeyboardFocus: true,
      accessibilityRole: 'checkbox',
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        minHeight: 20,
        marginTop: 0,
        position: 'relative'
      }
    },
    checkbox: {
      style: {
        height: 20,
        width: 20,
        marginRight: 4,
        backgroundColor: 'white',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        marginTop: 5
      }
    },
    checkmark: {
      style: {
        position: 'relative',
        opacity: 0,
        height: 10,
        width: 10,
        backgroundColor: 'blue',
        left: 4,
        top: 4
      }
    },
    content: {
      style: {
        fontSize: 14,
        marginLeft: 4,
        lineHeight: 20
      }
    },
    _precedence: ['checked', 'hovered'],
    _overrides: {
      checked: {
        checkmark: {
          style: {
            opacity: 1
          }
        }
      },
      hovered: {
        checkbox: {
          style: {
            backgroundColor: 'rgb(211,211,211)'
          }
        },
        _overrides: {
          checked: {
            checkmark: {
              style: {
                opacity: 1
              }
            }
          }
        }
      }
    }
  },
  checkboxName
];
