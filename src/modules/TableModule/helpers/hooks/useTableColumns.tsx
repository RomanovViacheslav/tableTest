import React, { useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';

export const useTableColumns = () => {
  const [openTags, setOpenTags] = useState<{ [key: string]: boolean }>({});
  const toggleTagVisibility = (rowId: string) => {
    setOpenTags((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Название', flex: 1 },
    { field: 'type', headerName: 'Тип', flex: 1 },
    { field: 'location', headerName: 'Расположение', flex: 1 },
    { field: 'organizationUnit', headerName: 'Орг. единица', flex: 1 },
    { field: 'inventoryNumber', headerName: 'Инв. номер', flex: 1 },
    {
      field: 'tags',
      headerName: 'Теги',
      flex: 1,
      valueGetter: (params) => {
        const tags = params.row.tags || [];
        return tags;
      },
      renderCell: (params) => {
        const rowId = params.row.id;
        const tags = params.value;
        const maxVisibleTags = 1;
        const visibleTags = openTags[rowId] ? tags : tags.slice(0, maxVisibleTags);
        const hiddenTagsCount = tags.length - visibleTags.length;

        const toggleShowAllTags = () => {
          toggleTagVisibility(rowId);
        };

        return (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            paddingBottom="5px"
            paddingTop="5px"
            gap="5px"
            minHeight="60px"
          >
            {visibleTags.map((tag: string) => (
              <Chip key={tag} label={tag} variant="outlined" color="primary" size="small" />
            ))}
            {hiddenTagsCount > 0 && (
              <Chip
                label={`+${hiddenTagsCount}`}
                variant="outlined"
                color="primary"
                size="small"
                onClick={toggleShowAllTags}
                style={{ cursor: 'pointer' }}
              />
            )}
          </Box>
        );
      },
    },
    { field: 'createdAt', headerName: 'Дата создания', flex: 1 },
    { field: 'updatedAt', headerName: 'Дата обновления', flex: 1 },
    { field: 'auditDate', headerName: 'Дата аудита', flex: 1 },
  ];

  return columns;
};
