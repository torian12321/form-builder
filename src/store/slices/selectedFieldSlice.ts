import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type SelectedFieldsState = string;

const initialState: SelectedFieldsState = ''

export const selectedFieldSlice = createSlice({
  name: 'selectedField',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<SelectedFieldsState>) =>
      action?.payload,
    unset: () => initialState,
  },
})

export const { set, unset } = selectedFieldSlice.actions

export default selectedFieldSlice.reducer;
