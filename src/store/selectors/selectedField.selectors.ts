import { createSelector } from '@reduxjs/toolkit';
import type { Field } from '../../../lib/main'
import type { RootState } from '../';
import { getFields } from './fields.selectors';

export const getSelectedField = (state: RootState): string => state.selectedField || '';

export const getSelectedFieldDetails = createSelector(
  [getFields, getSelectedField],
  (fields, selectedField): Field => fields[selectedField] || undefined,
);

