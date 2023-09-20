export interface ProductEntity {
  id: string;
  name: string;
  type: string;
  location: string;
  organizationUnit: string;
  inventoryNumber: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  auditDate: string;
}

export interface FormFiltersEntity {
  name: string;
  type: string;
  tags: string[];
}
