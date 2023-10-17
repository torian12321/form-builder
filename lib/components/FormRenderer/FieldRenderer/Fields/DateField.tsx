import { TextFieldProps } from '@mui/material/TextField';
import { AdapterMoment as MuiAdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker as MuiDesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Moment } from 'moment';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FieldProps } from './Fields.types';
import { formatMomentToDate } from './Fields.utils';
import { SharedTextField, SharedTextFieldProps } from './SharedTextField';

export const DateField = ({
  type,
  label,
  name,
  value,
  error,
  disabled,
  onChange,
  onBlur,
}: FieldProps): JSX.Element | null => {
  if (type !== FIELD_TYPE.DATE) return null;

  const handleOnChange = (newValue: Moment | null) => {
    if (!newValue) {
      onChange(null);
    } else {
      const stringDate = formatMomentToDate(newValue);
      onChange(stringDate);
    }
  };

  return (
    <MuiLocalizationProvider
      dateAdapter={MuiAdapterMoment}
      adapterLocale='en-US'
    >
      <MuiDesktopDatePicker
        label={label}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
        onAccept={onBlur}
        renderInput={(params: TextFieldProps) => (
          <SharedTextField
            {...(params as SharedTextFieldProps)}
            name={name}
            error={error}
            onBlur={onBlur}
          />
        )}
      />
    </MuiLocalizationProvider>
  );
};
