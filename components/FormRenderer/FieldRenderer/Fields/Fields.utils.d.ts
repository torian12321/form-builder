import type { TextFieldProps } from '@mui/material/TextField';
import { Moment } from 'moment';
import type { Properties, Choice } from './Fields.types';
export declare const getFieldChoices: (properties?: Properties) => Choice[];
export declare const formatMomentToDateTime: (dateMoment: Moment) => string;
export declare const formatMomentToDate: (dateMoment: Moment) => string;
export declare const getTodayDate: () => string;
export declare const getTodayDateTime: () => string;
/**
 * Funtionallity for `DatePicker` and `DateTimePicker` only to be used in TextField slot
 *
 * Destructure params + combine it with common ones.
 * Remove `slotProps` on the new object to avoid UI error.
 */
export declare const getSlotPropsTextField: (params: TextFieldProps) => TextFieldProps;
