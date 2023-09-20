import React from 'react';
import { SidebarItem } from './components';
import { menuItems } from '../../__mocks__';
import { StyledList } from './Sidebar.styled';

export const Sidebar = () => (
  <StyledList>
    {menuItems.map((menuItem) => (
      <SidebarItem key={menuItem.label} item={menuItem} depth={0} />
    ))}
  </StyledList>
);
