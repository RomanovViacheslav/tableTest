import React, { memo } from 'react';
import { Box } from '@mui/material';
import { Select, TextFieldComponent } from '../../../../components';
import { useFormFilters } from './helpers';

export const FiltersForm = () => {
  const {
    formik,
    uniqueTypes,
    uniqueTags,
    handleSelectChange,
    handleInputChange,
    handleClearSelect,
  } = useFormFilters();
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      display="flex"
      justifyContent="space-between"
      gap="20px"
      width="100%"
      marginBottom="26px"
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      })}
    >
      <TextFieldComponent
        type="text"
        name="name"
        placeholder="Search"
        value={formik.values.name}
        onChange={handleInputChange}
        onIconClick={formik.handleSubmit}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            formik.handleSubmit();
          }
        }}
      />
      <Select
        name="type"
        value={formik.values.type}
        onChange={handleSelectChange('type')}
        data={uniqueTypes}
        onClear={() => handleClearSelect('type')}
      />

      <Select
        name="tags"
        value={formik.values.tags}
        onChange={handleSelectChange('tags')}
        multiple
        data={uniqueTags}
        onClear={() => handleClearSelect('tags')}
      />
    </Box>
  );
};
