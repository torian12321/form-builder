import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import { FIELD_TYPE } from '../../../lib/main'
import type { Field } from '../../../lib/main'

export interface FieldsState {
  [fieldUuid: string]: Field
}

const DEFAULT_FIELD: Field = {
  name: 'aa',
  label: 'I am a test',
  placeholder: 'i am a placeholder',
  disabled: false,
  properties: {},
  type: FIELD_TYPE.TEXT,
}
const initialState: FieldsState = {
  [uuidv4()]: DEFAULT_FIELD,
  [uuidv4()]: {
    type: FIELD_TYPE.LONG_TEXT,
    name: "long_text",
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
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        [uuidv4()]: DEFAULT_FIELD,
      }
    },
    reset: () => initialState,
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { add, reset } = fieldsSlice.actions

export default fieldsSlice.reducer;
