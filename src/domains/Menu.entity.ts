export interface MenuItemEntity {
  label: string;

  children?: MenuItemEntity[];
  link?: string;
}
