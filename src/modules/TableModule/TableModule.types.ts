import { FormFiltersEntity, ProductEntity } from '../../domains';

export interface TableModuleState {
  filters: FormFiltersEntity;
  products: ProductEntity[];
  loading: boolean;
  error: string | null;
  uniqueTypes: string[];
  uniqueTags: string[];
}
