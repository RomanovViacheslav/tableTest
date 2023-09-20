import { TableProps as TablePropsMUI } from '@mui/material';
import { DataGridProps, GridColDef } from '@mui/x-data-grid';
import { ThemeType } from '../../theme';
import { ProductEntity } from '../../domains';

export interface StyledTableProps {
  theme?: ThemeType;
}
export type PageChangeCallback = (newPage: number) => void;

export interface TableProps extends DataGridProps {
  rows: ProductEntity[];
  columns: GridColDef[];
  currentPage?: number;
  onPageChange?: PageChangeCallback;
}
