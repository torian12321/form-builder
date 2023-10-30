import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import { FIELD_TYPE } from '../../../lib/main'
import type { Field } from '../../../lib/main'

export interface FieldsState {
  [fieldUuid: string]: Field
}

const DEFAULT_FIELD: Field = {
  type: FIELD_TYPE.TEXT,
  name: 'text',
  label: 'I am a test',
  placeholder: 'i am a placeholder',
  disabled: false,
  properties: {},
}
const initialState: FieldsState = {
  [uuidv4()]: DEFAULT_FIELD,
  [uuidv4()]: {
    type: FIELD_TYPE.LONG_TEXT,
    name: "long_text_field",
    label: "Field Type - long text",
    properties: {},
  },
  [uuidv4()]: {
    type: FIELD_TYPE.NUMBER,
    name: "number",
    label: "Field Type - number",
    properties: {},
  },
}

export const fieldsSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    add: (state) => ({
      ...state,
      [uuidv4()]: {
        ...DEFAULT_FIELD,
        name: uuidv4(),
      },
    }
    ),
    reset: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { add, reset } = fieldsSlice.actions

export default fieldsSlice.reducer;
