import { MenuItemEntity } from '../domains';

export const menuItems: MenuItemEntity[] = [
  {
    label: 'CMDB',
    link: '/cmdb',
    children: [
      {
        label: 'Серверы и ПК',
        link: '/cmdb/servers-pc',
      },
    ],
  },
];
