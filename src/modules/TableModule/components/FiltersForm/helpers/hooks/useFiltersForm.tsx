import React, { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import { SelectChangeEvent } from '@mui/material';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../shared';
import { FormFiltersEntity } from '../../../../../../domains';
import { INITIAL_VALUES } from '../../FiltersForm.constants';
import { updateFilters } from '../../../../slice';

export const useFormFilters = () => {
  const dispatch = useAppDispatch();
  const { filters, uniqueTypes, uniqueTags } = useAppSelector((state) => state.table);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = useCallback(
    (values: FormFiltersEntity) => {
      dispatch(updateFilters(values));
      if (values) {
        const searchParamsObj = {
          search_val: values.name,
          endpoint_type: values.type,
          endpoint_tags: values.tags.join(','),
        };
        setSearchParams(searchParamsObj);
      } else {
        setSearchParams({});
      }
    },
    [location.pathname],
  );

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (searchParams.toString() !== '') {
      const endpointTagsParam = searchParams.get('endpoint_tags');

      const updatedInitialValues: FormFiltersEntity = {
        name: searchParams.get('search_val') || '',
        type: searchParams.get('endpoint_type') || '',
        tags:
          endpointTagsParam === '' || endpointTagsParam === null
            ? []
            : endpointTagsParam?.split(','),
      };
      formik.setValues(updatedInitialValues);
      formik.handleSubmit();
    }
  }, []);

  const handleSelectChange = useCallback(
    (fieldName: string) => (event: SelectChangeEvent<any>) => {
      formik.setFieldValue(fieldName, event.target.value);
      formik.handleSubmit();
    },
    [formik.handleSubmit],
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      formik.handleChange(event);
    },
    [formik.handleSubmit],
  );

  const handleClearSelect = useCallback(
    (fieldName: string) => {
      formik.setFieldValue(fieldName, '');
      formik.handleSubmit();
    },
    [formik.handleSubmit],
  );

  return {
    formik,
    filters,
    uniqueTypes,
    uniqueTags,
    handleSelectChange,
    handleInputChange,
    handleClearSelect,
  };
};
