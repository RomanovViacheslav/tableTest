import React from 'react';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import { MenuItemProps } from './SidebarItem.types';

export const SidebarItem = ({ item, depth }: MenuItemProps) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isCurrentLink = pathname === item.link;

  React.useEffect(() => {
    setOpen(isCurrentLink);
  }, [isCurrentLink]);

  const handleClick = () => {
    if (item.children) {
      setOpen(!open);
    } else if (item.link) {
      navigate(item.link);
    }
  };

  const paddingLeft = `${20 + depth * 20}px`;

  return (
    <Box>
      <ListItem
        component="a"
        onClick={handleClick}
        sx={{
          paddingLeft,
          cursor: 'pointer',
          color: isCurrentLink ? 'blue' : 'inherit',
        }}
      >
        <ListItemText primary={item.label} />
        {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <SidebarItem key={child.label} item={child} depth={depth + 1} />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  );
};
