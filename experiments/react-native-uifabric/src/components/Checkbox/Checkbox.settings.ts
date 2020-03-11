import { IComposeSettings } from '@uifabricshared/foundation-compose';
import { checkboxName, ICheckboxType } from './Checkbox.types';

export const settings: IComposeSettings<ICheckboxType> = [
  {
    tokens: {
      borderColor: 'menuItemText',
      color: 'menuItemText',
      backgroundColor: 'menuBackground'
    },
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
        left: 4
      }
    },
    content: {
      style: {
        fontSize: 14,
        marginLeft: 4,
        lineHeight: 20,
        borderStyle: 'dashed',
        borderColor: 'transparent',
        borderWidth: 1
      }
    },
    _precedence: ['disabled', 'boxSide', 'checked', 'hovered', 'focused', 'pressed'],
    _overrides: {
      focused: {
        tokens: {
          backgroundColor: 'menuItemBackgroundHovered'
        },
        content: {
          style: {
            borderColor: 'rgba(128, 128, 128, 1)'
          }
        }
      },
      checked: {
        checkmark: {
          style: {
            opacity: 1
          }
        }
      },
      hovered: {
        tokens: {
          backgroundColor: 'menuItemBackgroundHovered'
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
      },
      disabled: {
        tokens: {
          borderColor: 'buttonBorderDisabled',
          color: 'disabledBodyText',
          backgroundColor: 'background'
        }
      },
      boxSide: {
        checkbox: {
          style: {
            marginLeft: 4,
            marginRight: 0
          }
        }
      },
      pressed: {
        tokens: {
          backgroundColor: 'menuItemBackgroundPressed'
        }
      }
    }
  },
  checkboxName
];
