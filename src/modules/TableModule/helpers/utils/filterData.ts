import { FormFiltersEntity, ProductEntity } from '../../../../domains';

export function filterData(data: ProductEntity[], filters: FormFiltersEntity): ProductEntity[] {
  const { name, type, tags } = filters;

  const areAllFiltersEmpty = !name && !type && tags.length === 0;

  if (areAllFiltersEmpty) {
    return data;
  }

  const filteredData = data.filter((product) => {
    if (name && !product.name.toLowerCase().includes(name.toLowerCase())) {
      return false;
    }

    if (type && product.type.toLowerCase() !== type.toLowerCase()) {
      return false;
    }

    if (tags.length > 0 && !tags.every((tag) => product.tags.includes(tag))) {
      return false;
    }

    return true;
  });

  return filteredData;
}
