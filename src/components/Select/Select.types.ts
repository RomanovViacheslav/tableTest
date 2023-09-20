import { SelectProps as SelectPropsMUI } from '@mui/material';
import { ThemeType } from '../../theme';

export interface StyledSelectProps {
  theme?: ThemeType;
  open?: boolean;
}

export interface SelectProps extends SelectPropsMUI {
  data?: string[];
  onClear?: () => void;
  onInputChange?: (value: string[]) => void;
  value: string | string[];
  multiple?:boolean
}
